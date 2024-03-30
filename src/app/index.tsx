import './index.css';
import './AdaptiveCards3.css';
// import './AdaptiveCards2.css';
// import './AdaptiveCards.css';

import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import App from './ui/App';

const rootElement = document.getElementsByTagName('main')[0];

rootElement &&
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
