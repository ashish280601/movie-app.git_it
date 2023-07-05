import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

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
  if (typeof action !== 'function') {
    console.log('ACTION_TYPE = ',action.type);
  }
  next(action);
}

// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//   // logger code
//   if (typeof action === 'function') {
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({reducer: rootReducer}, applyMiddleware(logger, thunk));
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
