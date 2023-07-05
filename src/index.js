import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';



const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({reducer: rootReducer});
console.log('store', store);
// console.log('Before State', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'Superman'}]
// });

// console.log('After State', store.getState());

root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
