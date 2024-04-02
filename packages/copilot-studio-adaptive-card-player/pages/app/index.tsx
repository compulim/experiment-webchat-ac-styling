import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const mainElement = document.querySelector('main');

mainElement &&
  createRoot(mainElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
