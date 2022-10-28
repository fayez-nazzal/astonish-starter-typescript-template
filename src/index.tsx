import React from 'react';
import ReactDOM from 'react-dom/client';
import Presentation from "./Presentation";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Presentation />
  </React.StrictMode>
);

reportWebVitals();
