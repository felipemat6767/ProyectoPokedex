import React from 'react';
import injectContext from "./store/appContext.js";
import { Routes, Route, BrowserRouter, Switch } from "react-router-dom"; 
import Navbar from './Components/Navbar';
import Info from './Views/Info.js';
import Home from './Views/Home.js';
import { Search } from './Views/Search.js';
import { Form } from './Views/Form.js';

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
      <Route exact path="/form" element = {Form}>
        <Form/>
      </Route>
    </Switch>
  </BrowserRouter>
};

export default injectContext(App);
