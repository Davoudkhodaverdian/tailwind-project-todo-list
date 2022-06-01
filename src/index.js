import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './components/homePage/homePage';
 import PricingSections from './components/pricingSections/pricingSections';
import reportWebVitals from './reportWebVitals';
import TodoList from './components/todoList/todoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HomePage /> */}
    <PricingSections />
    {/* <TodoList /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
