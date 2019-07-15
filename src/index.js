import React from "react";
import ReactDOM from "react-dom";
import "./CSS/index.css";
import { HashRouter, Route } from "react-router-dom";
import DashboardMaster from "./DashboardMaster";
import Navigation from "./Navigation";
import Login from "./Login";
import App from "./testing/App";

ReactDOM.render(
  <HashRouter>
    <div className="index">
      <Navigation />
      <Route exact={true} path="/login" component={Login} />
      <Route exact={true} path="/dashboard" component={DashboardMaster} />
      <Route exact={true} path="/App" component={App} />
    </div>
  </HashRouter>,
  document.getElementById("root")
);
