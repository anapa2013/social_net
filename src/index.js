import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice the /client for createRoot
import './index.css'; // Optional: import global styles
import App from './App'; // Import your root component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);