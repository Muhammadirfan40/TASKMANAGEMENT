import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';  // Import Provider
import { store } from './Store.jsx';      // Import your store

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>         {/* Wrap with Provider */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
