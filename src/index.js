import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import HomePage from './homePage/homePage';
import PricingSections from './pricingSections/pricingSections';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HomePage /> */}
    <PricingSections />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
