import { Components } from 'botframework-webchat';
import { hooks } from 'botframework-webchat-api';
import { type WebChatActivity } from 'botframework-webchat-core';
import { useMemo } from 'react';

const { AdaptiveCardContent } = Components;
const { useActivities } = hooks;

function buildChatCard(activity: WebChatActivity & { type: 'message' }) {
  return {
    type: 'AdaptiveCard',
    body: [{ type: 'TextBlock', text: activity.text }],
    $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
    version: '1.5'
  };
}

const WizardExperience = () => {
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

export default WizardExperience;
