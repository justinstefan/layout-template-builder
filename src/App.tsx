import React from "react";
import "./App.scss";

import NavBar from "./components/NavBar";
import Configuration from "./components/Configuration";
import Templates from "./components/Templates";

import { Route, Switch, Redirect } from "react-router";

let routes = (
  <Switch>
    <Route path="/layout-config">
      <Configuration />
    </Route>
    <Route exact path="/change-layout">
      <Templates />
    </Route>
    <Route exact path="/">
      <Redirect to="/layout-config" />
    </Route>
  </Switch>
);

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>{routes}</div>
    </div>
  );
}

export default App;
