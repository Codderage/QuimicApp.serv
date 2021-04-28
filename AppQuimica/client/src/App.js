import React, { useEffect, useState } from "react";
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
      <Router>
        <Switch>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/" exact>
            <Home user={user} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
