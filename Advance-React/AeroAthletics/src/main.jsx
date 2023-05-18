import React from 'react';
import './index.scss';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { UserProvider } from './contexts/user.contex';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './contexts/product.context';
import { CartProvider } from './contexts/cart.contex';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
