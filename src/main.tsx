/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

import '@/styles/global.css';
import '@/styles/reset.css';
import ProviderWrapper from "@/Provider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProviderWrapper>
      <App />
    </ProviderWrapper>
  </React.StrictMode>
);
