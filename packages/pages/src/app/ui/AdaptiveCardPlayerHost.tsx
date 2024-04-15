import { AdaptiveCardPlayer } from 'copilot-studio-adaptive-card-player';
import React, { memo } from 'react';

import useDirectLineJSBotConnection from '../directLine/useDirectLineJSBotConnection';
import useWebChatStore from '../directLine/useWebChatStore';

export default memo(function Wizard() {
  const [directLine] = useDirectLineJSBotConnection();
  const [store] = useWebChatStore();

  return <AdaptiveCardPlayer directLine={directLine} store={store} />;
});
