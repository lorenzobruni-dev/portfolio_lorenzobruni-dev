import React from 'react';
import './App.css';
import {Route, Router, Switch} from "wouter";
import Homepage from "./pages/MainPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route path={"/"}>
                    <Homepage/>
                </Route>
                <Route path={"/about"}>

                </Route>
                <Route path={"/contact"}>

                </Route>
                <Route>
                    {/* Page not found*/}
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
