import React from 'react';
import injectContext from "./store/appContext.js";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from './Components/Navbar';
import Pokemon from './Components/Pokemon';
import Info from './Views/Info.js';
import Home from './Views/Home.js';
function App() {
  return <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/info">
        <Info />
      </Route>
    </Switch>
  </Router>
};

export default injectContext(App);
