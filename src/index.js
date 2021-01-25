/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/index';

import "@/assets/css/reset.less";
import "lib-flexible";
import Router from "./router/index";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Router />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
