import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/store';
import { getNotes } from './store/actions';

const store = configureStore();
store.dispatch(getNotes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider >
);
