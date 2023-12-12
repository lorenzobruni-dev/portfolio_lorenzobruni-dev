import React from "react";
import "./App.css";
import { Redirect, Route, Router, Switch } from "wouter";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/"}>
          <MainPage location={"/"} />
        </Route>
        <Route path={"/about-me"}>
          <MainPage location={"/about-me"} />
        </Route>
        <Route path={"/contact"}>
          <MainPage location={"/contact"} />
        </Route>
        <Route>
          <Redirect to={"/"} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
