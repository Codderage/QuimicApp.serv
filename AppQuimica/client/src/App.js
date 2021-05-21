import React, {
  useEffect,
  useState,
  createContext,
  Suspense,
  lazy,
} from "react";
import Login from "./containers/login/Login";
import GlobalFonts from "./assets/fonts/fonts";
import "./App.css";
import axios from "./components/common/http";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/home/home";
//import Grupos from "./containers/grupos/grupos";
import carga from "./assets/img/load/ajax-loader.gif";
// import { render } from "react-dom";
//import { PageNotFound } from "./containers/error/PageNotFound";
//import UsersLanding from "./containers/users/usersLanding/UsersLanding";

const UsersLanding = lazy(() =>
  import("./containers/users/usersLanding/UsersLanding")
);
const Grupos = lazy(() => import("./containers/grupos/grupos"));

const CompuestosLanding = lazy(() =>
  import("./containers/compuestos/CompuestosLanding")
);

export const User = createContext();

const App = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const loggedToken = sessionStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      axios.defaults.headers.common.Authorization = `Bearer ${loggedToken}`;
      setToken(loggedToken);
    }
  }, []);

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <>
      <GlobalFonts />
      <User.Provider value={{ user, setUser, token, setToken }}>
        <Suspense
          fallback={
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", }}>
              <img src={carga} class="centerLoadingLogo" alt="loading" />
              <h1 style={{ textAlign: "center" }}>Cargando...</h1>
            </div>
          }>
          <Router>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>

              <Route path="/usuarios" exact>
                <UsersLanding />
              </Route>

              <Route path="/grupos">
                <Grupos />
              </Route>

              <Route path="/componentes">
                <CompuestosLanding />
              </Route>

              <Route path="/" exact>
                <Home />
              </Route>

              {/* <Route>
                <PageNotFound />
              </Route> */}
            </Switch>
          </Router>
        </Suspense>
      </User.Provider>
    </>
  );
};

export default App;
