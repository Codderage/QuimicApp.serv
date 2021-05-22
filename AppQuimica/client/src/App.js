import React, {
  useEffect,
  useState,
  createContext,
  Suspense,
  lazy,
} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./containers/login/Login";
import GlobalFonts from "./assets/fonts/fonts";
import Home from "./containers/home/home";
import Auth from "./containers/verif/Auth";
import VerAuth from "./containers/verif/VerAuth";

import "./App.css";
import "antd/dist/antd.css";
import axios from "./components/common/http";
import carga from "./assets/img/load/ajax-loader.gif";


const UsersLanding = lazy(() => import("./containers/users/usersLanding/UsersLanding"));
const GroupsLanding = lazy(() => import("./containers/groups/groupsLanding/GroupsLanding"));
const PracticesLanding = lazy(() => import("./containers/practices/practicesLanding/PracticesLanding"));
const PracticePage = lazy(() => import("./containers/practices/view/PracticePage"));
const CompoundsLanding = lazy(() => import("./containers/compounds/compoundsLanding/CompoundsLanding"));
const ComponentsLanding = lazy(() => import("./containers/components/componentsLanding/ComponentsLanding"));



export const User = createContext();

const App = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const loggedToken = sessionStorage.getItem("token");

    axios.defaults.headers.common.Authorization = `Bearer ${loggedToken}`;

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
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <img src={carga} class="centerLoadingLogo" alt="loading" />
              <h1 style={{ textAlign: "center" }}>Cargando...</h1>
            </div>
          }
        >
          <Router>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/usuarios" exact>
                <UsersLanding />
              </Route>
              <Route path="/grupos">
                <GroupsLanding />
              </Route>

              <Route path="/auth">
                <Auth />
              </Route>

              <Route path="/verificar-pw">
                <VerAuth />
              </Route>

              <Route path="/practicas" exact>
                <PracticesLanding />
              </Route>
              <Route path="/practicas/practica" exact>
                <PracticePage />
              </Route>
              <Route path="/compuestos" exact>
                <CompoundsLanding />
              </Route>
              <Route path="/componentes" exact>
                <ComponentsLanding />
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
