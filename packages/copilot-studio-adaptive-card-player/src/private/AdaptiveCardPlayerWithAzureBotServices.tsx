import { createDirectLine } from 'botframework-webchat';
import React, { memo, useEffect, useState } from 'react';

import AdaptiveCardPlayer from './AdaptiveCardPlayer';

type Props = {
  firstOutgoingMessage?: string | undefined;
  onFirstRender: undefined | (() => void);
} & ({ token: string } | { tokenURL: string });

const AdaptiveCardPlayerWithAzureBotServices = memo(function AdaptiveCardPlayerWithAzureBotServices(props: Props) {
  const { firstOutgoingMessage, onFirstRender } = props;
  const [directLine, setDirectLine] = useState<ReturnType<typeof createDirectLine> | undefined>(undefined);

  useEffect(() => {
    const abortController = new AbortController();

    (async function () {
      let token: string;

      if ('token' in props) {
        token = props.token;
      } else {
        const res = await fetch(props.tokenURL, { headers: { accept: 'application/json' } });

        if (!res.ok) {
          return;
        }

        ({ token } = await res.json());
      }

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
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  return !!directLine && <AdaptiveCardPlayer onFirstRender={onFirstRender} directLine={directLine} />;
});

export default AdaptiveCardPlayerWithAzureBotServices;
