import { createDirectLine, createStore } from 'botframework-webchat';
import React, { memo, useEffect, useMemo, useState, type ReactNode } from 'react';

import Context from './private/Context';

type Props = { children?: ReactNode | undefined };

export default memo(function DirectLineMockBotProvider({ children }: Props) {
  const [token, setToken] = useState<string | undefined>(undefined);

  useEffect(() => {
    (async function () {
      const res = await fetch('https://webchat-mockbot.azurewebsites.net/directline/token', {
        method: 'POST'
      });

      const { token } = await res.json();

      setToken(token);
    })();
  }, [setToken]);

  const directLine = useMemo(() => token && createDirectLine({ token }), [token]);
  const store = useMemo(() => createStore(), []);

  const context = useMemo(() => ({ directLine, store }), [directLine, store]);

  return <Context.Provider value={context}>{token ? children : false}</Context.Provider>;
});
