import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "state/store";
import { Provider } from "react-redux";
import "./assets/css/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
