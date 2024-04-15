import './ActivityInput.css';

import { Components, hooks } from 'botframework-webchat';
import { type WebChatActivity } from 'botframework-webchat-core';
import React, { memo, useMemo } from 'react';

import useDirectLineJSBotConnection from '../directLine/useDirectLineJSBotConnection';
import useWebChatStore from '../directLine/useWebChatStore';

const { useActivities } = hooks;
const { Composer } = Components;

const ActivityMonitor_ = memo(function ActivityMonitor_() {
  const [activities] = useActivities();

  const firstBotMessageActivity = useMemo<(WebChatActivity & { type: 'message' }) | undefined>(
    () =>
      activities.findLast(
        (activity): activity is WebChatActivity & { from: { role: 'bot' }; type: 'message' } =>
          activity.from.role === 'bot' && activity.type === 'message'
      ),
    [activities]
  );

  const value = useMemo(() => {
    const card = firstBotMessageActivity?.attachments?.find(
      ({ contentType }) => contentType === 'application/vnd.microsoft.card.adaptive'
    );

    return card ? JSON.stringify(card.content, null, 2) : JSON.stringify(firstBotMessageActivity, null, 2);
  }, [firstBotMessageActivity]);

  return (
    <textarea
      autoCapitalize="false"
      autoComplete="false"
      autoCorrect="false"
      autoFocus={true}
      className="activity-input"
      readOnly={true}
      spellCheck={false}
      value={value}
    />
  );
});

export default memo(function ActivityMonitor() {
  const [directLine] = useDirectLineJSBotConnection();
  const [store] = useWebChatStore();

  return (
    <Composer directLine={directLine} store={store}>
      <ActivityMonitor_ />
    </Composer>
  );
});
