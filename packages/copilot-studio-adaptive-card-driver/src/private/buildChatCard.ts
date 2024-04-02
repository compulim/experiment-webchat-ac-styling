import { type WebChatActivity } from 'botframework-webchat-core';

export default function buildChatCard(activity: WebChatActivity & { type: 'message' }) {
  return {
    type: 'AdaptiveCard',
    body: [{ type: 'TextBlock', text: activity.text }],
    $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
    version: '1.5'
  };
}
