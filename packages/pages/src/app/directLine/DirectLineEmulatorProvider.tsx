import { createStore } from 'botframework-webchat';
import { type WebChatActivity } from 'botframework-webchat-core';
import { memo, useEffect, useMemo, useState, type ReactNode } from 'react';

import useAppReducer from '../data/useAppReducer';
import createDirectLineEmulator from '../util/createDirectLineEmulator';
import onErrorResumeNext from '../util/onErrorResumeNext';
import Context from './private/Context';

type Props = { children?: ReactNode | undefined };

export default memo(function DirectLineProvider({ children }: Props) {
  const [{ activitiesJSON }] = useAppReducer();
  const activities = useMemo(() => onErrorResumeNext(() => JSON.parse(activitiesJSON)), [activitiesJSON]);

  const [ready, setReady] = useState(false);
  const store = useMemo(() => {
    setReady(false);

    return createStore({}, () => (next: (action: unknown) => unknown) => (action: { type: string }) => {
      if (action.type === 'DIRECT_LINE/CONNECT_FULFILLED') {
        setReady(true);
      }

      return next(action);
    });
  }, [activities, setReady]);

  const { directLine } = useMemo(() => createDirectLineEmulator({ store }), [store]);

  useEffect(() => {
    activities &&
      ready &&
      activities.forEach((activity: Partial<WebChatActivity>) => directLine.emulateIncomingActivity(activity));
  }, [activities, directLine, ready]);

  useEffect(() => {
    const abortController = new AbortController();

    (async function () {
      const { signal } = abortController;

      for (; !signal.aborted; ) {
        const { resolveAll } = await directLine.actPostActivity(() => {});

        if (signal.aborted) {
          break;
        }

        const echoBackActivity = await resolveAll();

        console.log(echoBackActivity);
      }
    })();

    return () => abortController.abort();
  }, [directLine]);

  const context = useMemo(() => ({ directLine, store }), [directLine, store]);

  return <Context.Provider value={context}>{children}</Context.Provider>;
});
