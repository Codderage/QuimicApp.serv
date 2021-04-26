import React from "react";
import Landing from "./containers/landing/Landing";
import GlobalFonts from "./assets/fonts/fonts";
import ScatterChart from "./components/ScatterChart";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./containers/home/home";

const App = () => {
  return (
    <>
      <GlobalFonts />
      <Router>
        <Switch>
          <Route path="/login">
            <Landing />
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
