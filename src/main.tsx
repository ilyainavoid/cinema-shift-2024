/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';

import Provider from '@/Provider.tsx';

import App from './App.tsx';

import '@/styles/global.css';
import '@/styles/reset.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
