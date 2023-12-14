import React from "react";
import "./App.css";
import { Redirect, Route, Router, Switch } from "wouter";
import MainPage from "./pages/MainPage";

function App() {
  const URL = "/portfolio_lorenzobruni-dev/";
  return (
    <Router>
      <Switch>
        <Route path={"/"}>
          <MainPage location={`${URL}/`} isHomepage={true} />
        </Route>
        <Route path={"/about-me"}>
          <MainPage location={`${URL}/about-me`} isHomepage={false} />
        </Route>
        <Route path={"/contact"}>
          <MainPage location={`${URL}/contact`} isHomepage={false} />
        </Route>
        <Route>
          <Redirect to={"/"} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
