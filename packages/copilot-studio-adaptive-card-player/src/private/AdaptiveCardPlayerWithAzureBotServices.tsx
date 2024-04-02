import { createDirectLine } from 'botframework-webchat';
import React, { memo, useEffect, useState } from 'react';

import AdaptiveCardPlayer from './AdaptiveCardPlayer';

type Props = {
  firstOutgoingMessage?: string | undefined;
  tokenURL: string;
};

const AdaptiveCardPlayerWithAzureBotServices = memo(function AdaptiveCardPlayerWithAzureBotServices({
  firstOutgoingMessage,
  tokenURL
}: Props) {
  const [directLine, setDirectLine] = useState<ReturnType<typeof createDirectLine> | undefined>(undefined);

  useEffect(() => {
    const abortController = new AbortController();

    (async function () {
      const res = await fetch(tokenURL, { headers: { accept: 'application/json' } });

      if (!res.ok) {
        return;
      }

      const { token } = await res.json();
      const directLine = createDirectLine({ token });

      setDirectLine(directLine);

      const subscription = directLine.connectionStatus$.subscribe({
        next(value) {
          if (value === 2) {
            directLine
              .postActivity({
                localTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                locale: navigator.language,
                name: 'startConversation',
                type: 'event'
              } as any)
              .subscribe({
                next() {
                  firstOutgoingMessage &&
                    directLine
                      .postActivity({
                        localTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                        locale: navigator.language,
                        text: firstOutgoingMessage,
                        type: 'message'
                      } as any)
                      .subscribe();

                  // Only send the event once, unsubscribe after the event is sent.
                  subscription.unsubscribe();
                }
              });
          }
        }
      });
    })();

    return () => abortController.abort();
  }, []);

  return !!directLine && <AdaptiveCardPlayer directLine={directLine} />;
});

export default AdaptiveCardPlayerWithAzureBotServices;
