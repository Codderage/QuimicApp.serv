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
import axios from "axios";

const App = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const consulta = async () => {
      const res = await axios.get('perfil-usuario');

      setUser(res.data);
    }
    consulta();
  }, []);

  return (
    <>
      <GlobalFonts />
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
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
