import React from "react";
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import store from "./store";
import App from "./components/app";
import '../assets/stylesheets/application.scss';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <Provider store={store}>
    <App />
  </Provider>
);