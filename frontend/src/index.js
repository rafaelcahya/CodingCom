import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/tailwind.css"
import "./styles/styles.css"
import reportWebVitals from './reportWebVitals';
import AppAdmin from './admin/App_admin';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppAdmin />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
