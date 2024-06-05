import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UseEffect from './hoooks/UseEffect';

console.log('root');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    {/* <UseEffect></UseEffect> */}

    <App />
  </React.StrictMode>
);


