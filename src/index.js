import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppStylesProvider } from "./AppStyles";

ReactDOM.render( 
  <React.StrictMode>
    <AppStylesProvider />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
