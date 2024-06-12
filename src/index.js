import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UseEffect from './hoooks/UseEffect';


import store from './store';
import { Provider } from 'react-redux';

console.log('root');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App></App>
    </Provider>

  </React.StrictMode>
);


