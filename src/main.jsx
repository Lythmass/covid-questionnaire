import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { SendDataContextProvider } from '@/state';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SendDataContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SendDataContextProvider>
  </React.StrictMode>
);
