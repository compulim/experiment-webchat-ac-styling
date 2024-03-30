import { type createStore } from 'botframework-webchat';
import { useContext, useMemo } from 'react';

import Context from './private/Context';

type Store = ReturnType<typeof createStore>;

export default function useWebChatStore(): readonly [Store] {
  const { store } = useContext(Context);

  return useMemo(() => Object.freeze([store] as const), [store]);
}
