import { cx } from '@emotion/css';
import { Components } from 'botframework-webchat';
import { hooks } from 'botframework-webchat-api';
import { type DirectLineJSBotConnection, type WebChatActivity, type createStore } from 'botframework-webchat-core';
import React, { memo, useMemo } from 'react';
import CLASS_NAME from './AdaptiveCardPlayer.className';
import HOST_CONFIG from './AdaptiveCardsHostConfig';
import buildChatCard from './buildChatCard';

const { AdaptiveCardContent, Composer } = Components;
const { useActivities } = hooks;

type Props = {
  directLine: DirectLineJSBotConnection;
  store?: ReturnType<typeof createStore> | undefined;
};

const _ = () => {
  const [activities] = useActivities();

  const firstBotMessageActivity = useMemo<(WebChatActivity & { type: 'message' }) | undefined>(
    () =>
      activities.findLast(
        (activity): activity is WebChatActivity & { from: { role: 'bot' }; type: 'message' } =>
          activity.from.role === 'bot' && activity.type === 'message'
      ),
    [activities]
  );

  const card = useMemo(() => {
    const card = firstBotMessageActivity?.attachments?.find(
      ({ contentType }) => contentType === 'application/vnd.microsoft.card.adaptive'
    );

    return card ? card.content : firstBotMessageActivity && buildChatCard(firstBotMessageActivity);
  }, [firstBotMessageActivity]);

  return card && <AdaptiveCardContent content={card} />;
};

export default memo(function AdaptiveCardPlayer({ directLine, store }: Props) {
  const props = {
    adaptiveCardsHostConfig: HOST_CONFIG,
    directLine,
    store
  };

  return (
    <div
      className={cx(
        'copilot-studio__adaptive-card-player copilot-studio__adaptive-card-player--customized',
        CLASS_NAME
      )}
    >
      <Composer {...props}>
        <_ />
      </Composer>
    </div>
  );
});
