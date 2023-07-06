import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";

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

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    // logger code
    if (typeof action !== "function") {
      console.log("ACTION_TYPE = ", action.type);
    }
    next(action);
  };

// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//   // logger code
//   if (typeof action === 'function') {
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore(
  { reducer: rootReducer },
  applyMiddleware(logger, thunk)
);
console.log("store", store.getState());

// export const StoreContext = createContext();

// console.log("StoreContext", StoreContext);

// class Provider extends React.Component {
//   render() {
//     const { store } = this.props;
//     return (
//       <StoreContext.Provider value={store}>
//         {/* this children had all the properties that passes in the provider tag */}
//         {this.props.children}
//       </StoreContext.Provider>
//     );
//   }
// }

// export function connect(callback) {
//   return function (Component) {
//     class ConnectedComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
//       }

//       componentWillUnmount() {
//         this.unsubscribe();
//       }
//       render() {
//         const {store} = this.props;
//         const state = store.getState();
//         const dataTOBePassedAsProps = callback(state);
//         return (
//           <Component
//            {...dataTOBePassedAsProps}
//            dispatch={store.dispatch} 
//           />
//         );
//       }
//     }

//     class ConnectedComponentWrapper extends React.Component {
//       render() {
//         return (
//           <StoreContext.Consumer>
//             {(store) => <ConnectedComponent store={store} />}
//           </StoreContext.Consumer>
//         );
//       }
//     }

//     return ConnectedComponentWrapper;
//   };
// }
// update store by dispatching actions
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'Superman'}]
// });

// console.log('After State', store.getState());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
