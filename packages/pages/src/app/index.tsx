import './index.css';

import React, { StrictMode } from 'react';
// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom';

import App from './ui/App';

const rootElement = document.getElementsByTagName('main')[0];

rootElement &&
  render(
    <StrictMode>
      <App />
    </StrictMode>,
    rootElement
  );
