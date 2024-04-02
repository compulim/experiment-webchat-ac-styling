import { type createStore } from 'botframework-webchat';
import { type DirectLineJSBotConnection } from 'botframework-webchat-core';
import { createContext } from 'react';

type Context = {
  directLine: DirectLineJSBotConnection;
  store: ReturnType<typeof createStore>;
};

const Context = createContext<Context>(
  new Proxy({} as Context, {
    get(): string {
      throw new Error('Cannot be used outside of its <Provider>.');
    }
  })
);

export default Context;
