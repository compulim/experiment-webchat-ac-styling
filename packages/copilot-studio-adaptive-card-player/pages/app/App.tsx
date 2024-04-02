import './App.css';

import React, { memo } from 'react';

import { AdaptiveCardPlayerWithAzureBotServices } from '../../src/index';

const App = memo(function App() {
  if (!process.env.TOKEN_URL) {
    throw new Error('No TOKEN_URL found.');
  }

  return (
    <AdaptiveCardPlayerWithAzureBotServices
      firstOutgoingMessage="1"
      tokenURL={process.env.TOKEN_URL || ''}
    />
  );
});

export default App;
