import { DirectLineJSBotConnection, createStore } from 'botframework-webchat-core';
import React from 'react';

type Props = {
    directLine: DirectLineJSBotConnection;
    store: ReturnType<typeof createStore>;
};
declare const _default: React.NamedExoticComponent<Props>;

export { _default as AdaptiveCardDriver };
