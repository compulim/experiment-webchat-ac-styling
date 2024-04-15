import React, { StrictMode } from 'react';
// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom';
import App from './App';

const mainElement = document.querySelector('main');

mainElement &&
  render(
    <StrictMode>
      <App />
    </StrictMode>,
    mainElement
  );
