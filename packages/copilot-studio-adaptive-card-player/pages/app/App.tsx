import './App.css';

import React, { memo } from 'react';

import { AdaptiveCardPlayerWithAzureBotServices } from '../../src/index';

const App = memo(function App() {
  return <AdaptiveCardPlayerWithAzureBotServices tokenURL={process.env.TOKEN_URL || ''} />;
});

export default App;
