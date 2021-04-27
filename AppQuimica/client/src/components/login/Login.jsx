import React, { useState } from "react";
import {
  LoginLogo,
  EmailInput,
  PasswordInput,
  RememberInput,
  SendButton,
  Link,
  Seccion,
} from "./login.styled";
import swal from "sweetalert";
import axios from "axios";
import { useHistory } from "react-router-dom";

import carga from "../../assets/img/load/ajax-loader.gif";

import Cookies from "universal-cookie";

const Login = () => {
  const [getState, setState] = useState();
  const [username, setUserName] = useState(0);
  const [password, setPassword] = useState(0);
  const cookies = new Cookies();
  let history = useHistory();

  const handleSubmit = async (e) => {
    if (username.length <= 5 || password.length <= 5) {
      swal({
        title: "Error",
        text: "El usuario o contraseña deben de ser mínimo 6 carácteres.",
        icon: "error",
        button: "Aceptar",
        timer: "3000",
      });
    } else {
      swal({
        //title: "Comprobando ...",
        icon: carga,
        button: false,
        showConfirmButton: false,
        allowOutsideClick: false,
      });
      axios
        //.get(
        .post(
          "http://localhost/M7_M14/projecte_M14/quimica/AppQuimica/server/public/api/auth/login",
          {
            username: username,
            password: password,
          }
        )
        .then((response) => {
          //console.log(response.data);
          if (response.status >= 200 && response.status <= 205) {
            swal({
              title: "Logueado con exito",
              text: "Bienvenido " + response.data.user.username,
              icon: "success",
              button: "Aceptar",
              timer: "3000",
            });
            cookies.set("token", response.data.access_token, { path: "/" });

            history.push("/");

            //console.log(cookies.get('token'));
          }
        })
        .catch(function (error) {
          if (error.response.status >= 400 && error.response.status <= 403) {
            swal({
              title: "Usuario no encontrado",
              icon: "error",
              button: "Aceptar",
              timer: "3000",
            });
          } else if (error.response.status == 422) {
            console.log(error.response.data);
            swal({
              title: "Error, algun campo vacío",
              icon: "error",
              button: "Aceptar",
              timer: "3000",
            });
          } else {
            swal({
              title: "Error interno " + error.response.status,
              text: "Error interno, vuelve a intentarlo en unos momentos.",
              icon: "error",
              button: "Aceptar",
              timer: "3000",
            });
          }
        });
    }

    // setAa((a) => {
    //   peticionGet("usuarios");
    // });
    // console.log(aa, "aaaa");
    //console.log(peticionGet("usuarios"));
    //<peticionGet ruta="usuarios" />;
  };
  return (
    <Seccion className="container d-flex flex-column justify-content-centre align-items-center">
      <div>
        <LoginLogo />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <EmailInput
            className="form-control mb-3"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <PasswordInput
            className="form-control mb-3"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-check mb-0">
          <RememberInput />
          <label className="form-check-label" htmlFor="loginRemember">
            Recuerdame
          </label>
        </div>
        <SendButton className="btn btn-lg my-4" onClick={handleSubmit}>
          Entrar
        </SendButton>
        <div>
          <Link
            onClick={() => {
              swal("Escribe tu correo electronico:", {
                content: "input",
              }).then((value) => {
                swal(`Te hemos enviado un coreo a '${value}'`);
              });
            }}
          >
            He olvidado la contraseña
          </Link>
        </div>
      </form>
    </Seccion>
  );
};

export default Login;
