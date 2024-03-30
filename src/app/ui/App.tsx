import './App.css';

import { memo, useCallback, useState, type FormEventHandler } from 'react';

import useAppReducer from '../data/useAppReducer';
import DirectLineProvider from '../directLine/DirectLineProvider';
import ActivityInput from './ActivityInput';
import ActivityMonitor from './ActivityMonitor';
import WebChat from './WebChat';
import Wizard from './Wizard';

export default memo(function App() {
  const [{ activitiesJSON }, { setActivitiesJSON }] = useAppReducer();
  const [type, setType] = useState<'emulator' | 'mockbot'>('emulator');

  const handleTypeInput = useCallback<FormEventHandler<HTMLInputElement>>(
    ({ currentTarget: { value } }) => setType(value === 'mockbot' ? 'mockbot' : 'emulator'),
    [setType]
  );

  return (
    <DirectLineProvider key={activitiesJSON} type={type}>
      <div className="app">
        <div className="app__pane app__top-nav">
          <div>Card-driven demo</div>
          <label>
            <input checked={type === 'emulator'} onChange={handleTypeInput} type="radio" value="emulator" />
            Emulator
          </label>
          <label>
            <input checked={type === 'mockbot'} onChange={handleTypeInput} type="radio" value="mockbot" />
            Mock Bot
          </label>
        </div>
        <div className="app__pane app__transcript">
          {type === 'mockbot' ? (
            <ActivityMonitor />
          ) : (
            <ActivityInput onChange={setActivitiesJSON} value={activitiesJSON} />
          )}
        </div>
        <div className="app2 app3 app__pane app__wizard">
          <Wizard />
        </div>
        <div className="app__pane base-102 x-baseCard-103 content-223 quickLookCard-111">
          <WebChat />
        </div>
      </div>
    </DirectLineProvider>
  );
});
