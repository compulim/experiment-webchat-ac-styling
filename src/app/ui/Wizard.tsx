import { Components } from 'botframework-webchat';
import { memo } from 'react';

import useDirectLineJSBotConnection from '../directLine/useDirectLineJSBotConnection';
import useWebChatStore from '../directLine/useWebChatStore';
import hostConfig from './AdaptiveCardsHostConfig';
import WizardExperience from './WizardExperience';

const { Composer } = Components;

export default memo(function Wizard() {
  const [directLine] = useDirectLineJSBotConnection();
  const [store] = useWebChatStore();

  return (
    <div>
      <Composer adaptiveCardsHostConfig={hostConfig} directLine={directLine} store={store}>
        <WizardExperience />
      </Composer>
    </div>
  );
});
