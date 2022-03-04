import React from 'react';
import injectContext from "./store/appContext.js";
import { Routes, Route, BrowserRouter, Switch } from "react-router-dom"; 
import Navbar from './Components/Navbar';
import Info from './Views/Info.js';
import Home from './Views/Home.js';
import { Search } from './Views/Search.js';

function App() {
  return <BrowserRouter style={{ backgroundImage: "url(/Fondo.jpg)" }}>
    <Navbar />
    <Switch >
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/info/:Pokname" element = {Info}>
        <Info />
      </Route>
      <Route exact path="/search" element = {Search}>
        <Search/>
      </Route>
    </Switch>
  </BrowserRouter>
};

export default injectContext(App);
