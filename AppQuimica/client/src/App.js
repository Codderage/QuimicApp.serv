import React, { useEffect, useState, createContext } from "react";
import Login from "./containers/login/Login";
import GlobalFonts from "./assets/fonts/fonts";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/home/home";
import UsersLanding from "./containers/users/usersLanding/UsersLanding";

export const User = createContext();

const App = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  useEffect(() => {
    const loggedToken = localStorage.getItem("token");
    if (loggedToken) {
      const foundToken = loggedToken;
      setToken(foundToken);
    }
  }, []);

  axios.defaults.headers.common["Authorization"] = "Bearer " + token;

  return (
    <>
      <GlobalFonts />
      <User.Provider value={{ user, setUser, token, setToken }}>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/usuarios" exact>
              <UsersLanding />
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
