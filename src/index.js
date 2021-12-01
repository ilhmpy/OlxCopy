import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { AppStylesProvider } from "./AppStyles";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

ReactDOM.render( 
  <React.StrictMode>
    <AppStylesProvider />
    <Router>
      <Header />
      <App />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
