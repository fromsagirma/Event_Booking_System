


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { FavoriteProvider } from './context/FavoriteContext';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <FavoriteProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FavoriteProvider>
    </ThemeProvider>
  </React.StrictMode>
);
