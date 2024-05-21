import { cx } from '@emotion/css';
import { Components } from 'botframework-webchat';
import { hooks } from 'botframework-webchat-api';
import { type DirectLineJSBotConnection, type WebChatActivity, type createStore } from 'botframework-webchat-core';
import React, { memo, useEffect, useMemo, type ReactNode } from 'react';
import CLASS_NAME from './AdaptiveCardPlayer.className';
import HOST_CONFIG from './AdaptiveCardsHostConfig';
import buildChatCard from './buildChatCard';

const { AdaptiveCardContent, Composer } = Components;
const { useActivities } = hooks;

type Props = {
  directLine: DirectLineJSBotConnection;
  onFirstRender?: (() => void) | undefined;
  renderLoading?: (() => ReactNode) | undefined;
  store?: ReturnType<typeof createStore> | undefined;
};

const _ = (props: Pick<Props, 'onFirstRender' | 'renderLoading'>) => {
  const [activities] = useActivities();

  const messageActivities = useMemo(() => activities.filter(({ type }) => type === 'message'), [activities]);

  const lastBotMessageActivity = useMemo<(WebChatActivity & { type: 'message' }) | undefined>(
    () =>
      messageActivities.findLast(
        (activity): activity is WebChatActivity & { from: { role: 'bot' }; type: 'message' } =>
          activity.from.role === 'bot' && activity.type === 'message'
      ),
    [messageActivities]
  );

  const isPending = useMemo(
    () => messageActivities[messageActivities.length - 1]?.from?.role === 'user',
    [messageActivities]
  );

  const card = useMemo(() => {
    const card = lastBotMessageActivity?.attachments?.find(
      ({ contentType }) => contentType === 'application/vnd.microsoft.card.adaptive'
    );

    return card ? card.content : lastBotMessageActivity && buildChatCard(lastBotMessageActivity);
  }, [lastBotMessageActivity]);

  useEffect(() => {
    if (!!card && !!props.onFirstRender) {
      props.onFirstRender();
    }
  }, [card]);

  return isPending && props.renderLoading ? (
    props.renderLoading()
  ) : card ? (
    <AdaptiveCardContent content={card} />
  ) : null;
};

export default memo(function AdaptiveCardPlayer({ directLine, store, onFirstRender, renderLoading }: Props) {
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
        <_ onFirstRender={onFirstRender} renderLoading={renderLoading} />
      </Composer>
    </div>
  );
});
