import React from 'react';
import './index.scss';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { UserProvider } from './contexts/user.contex';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
