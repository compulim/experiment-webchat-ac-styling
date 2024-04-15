import './WebChat.css';

import { Components } from 'botframework-webchat';
import React, { memo } from 'react';

import useDirectLineJSBotConnection from '../directLine/useDirectLineJSBotConnection';
import useWebChatStore from '../directLine/useWebChatStore';

const { BasicWebChat, Composer } = Components;

export default memo(function Chat() {
  const [directLine] = useDirectLineJSBotConnection();
  const [store] = useWebChatStore();

  return (
    <div className="chat">
      <Composer directLine={directLine} store={store}>
        <BasicWebChat />
      </Composer>
    </div>
  );
});
