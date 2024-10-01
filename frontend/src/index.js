import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Optional: if you want to add global CSS
import App from './App';

// Render the App component to the root element in the index.html file
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
