import React from "react";
import Login from "./containers/login/Login";
import GlobalFonts from "./assets/fonts/fonts";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./containers/home/home";

const App = () => {
  return (
    <>
      <GlobalFonts />
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
