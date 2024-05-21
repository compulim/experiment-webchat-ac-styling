import './App.css';

import React, { memo, useCallback, type ReactNode } from 'react';

import { AdaptiveCardPlayerWithAzureBotServices } from '../../src/index';

const App = memo(function App() {
  if (!process.env.TOKEN_URL) {
    throw new Error('No TOKEN_URL found.');
  }

  const renderLoading = useCallback<() => ReactNode>(() => <div>Loading&hellip;</div>, []);

  return (
    <AdaptiveCardPlayerWithAzureBotServices
      firstOutgoingMessage="1"
      renderLoading={renderLoading}
      tokenURL={process.env.TOKEN_URL || ''}
    />
  );
});

export default App;
