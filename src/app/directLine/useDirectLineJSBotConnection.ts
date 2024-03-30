import { type DirectLineJSBotConnection } from 'botframework-webchat-core';
import { useContext, useMemo } from 'react';

import Context from './private/Context';

export default function useDirectLineJSBotConnection(): readonly [DirectLineJSBotConnection] {
  const { directLine } = useContext(Context);

  return useMemo(() => Object.freeze([directLine] as const), [directLine]);
}
