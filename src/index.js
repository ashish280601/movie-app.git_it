import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

// function created using Curried concept - logger(obj, next, action) 
// logger(obj)(next)(action)
// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {       // Method 1 middleware 
//       //  middleware code
//       console.log('ACTION_TYPE = ', action.type);
//       next(action);
//     }
//   }
// }

// Method 2 to write middleware

const logger = ({ dispatch, getState }) => (next) => (action) => {
  // logger code
  console.log('ACTION_TYPE = ',action.type);
  next(action);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({reducer: rootReducer}, applyMiddleware(logger));
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
