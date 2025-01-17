import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext';


// Rendering the root component (App) into the root element of the HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />

    </StoreContextProvider>
  </BrowserRouter>
)
