import React, { useEffect, useState, useContext, createContext } from "react";
import Login from "./containers/login/Login";
import GlobalFonts from "./assets/fonts/fonts";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./containers/home/home";

export const User = createContext();

const App = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <>
      <GlobalFonts />
      <User.Provider value={{ user, setUser }}>
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
      </User.Provider>
    </>
  );
};

export default App;
