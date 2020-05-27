import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Configuration from "./components/Configuration";
import Templates from "./components/Templates";

import { Route, Switch } from "react-router";

let routes = (
  <Switch>
    <Route exact path="/">
      <Templates />
    </Route>
    <Route path="/:layout">
      <Configuration />
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
