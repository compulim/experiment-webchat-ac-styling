import { memo } from 'react';

import { AdaptiveCardDriver } from 'copilot-studio-adaptive-card-driver';
import useDirectLineJSBotConnection from '../directLine/useDirectLineJSBotConnection';
import useWebChatStore from '../directLine/useWebChatStore';

export default memo(function Wizard() {
  const [directLine] = useDirectLineJSBotConnection();
  const [store] = useWebChatStore();

  return <AdaptiveCardDriver directLine={directLine} store={store} />;
});
