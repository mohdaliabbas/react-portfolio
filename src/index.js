import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import body from './App'; // Assuming 'bodyy' is the correct name for your 'body' component
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <App />
    
    <body />
  </React.Fragment>
);

reportWebVitals();
