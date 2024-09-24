import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Ensure the path is correct
import './index.css'; // Ensure this file exists and is correctly styled
import { Provider } from 'react-redux';
import store from './store.js'; // Ensure this file exports a valid Redux store

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
