import React, { useState } from "react";

import swal from "sweetalert";
import axios from "axios";
import carga from "../../../assets/img/load/ajax-loader.gif";
import Cookies from "universal-cookie";

import {
  EmailInput,
  PasswordInput,
  SendButton,
  Seccion,
  TextInput,
  AdminCheckbox,
  Title,
} from "./registerProfesor.styled";

const RegisterProfesor = () => {
  const [get, set] = useState();

  return (
    <Seccion className="container d-flex flex-column justify-content-centre align-items-center">
      <div>
        <Title>Registrar Profesor</Title>
      </div>
      <form>
        <div className="form-group">
          <TextInput
            className="form-control mb-3"
            placeholder="Nombre de usuario"
          />
        </div>
        <div className="form-group">
          <TextInput className="form-control mb-3" placeholder="Nombre" />
        </div>
        <div className="form-group">
          <TextInput className="form-control mb-3" placeholder="Apellidos" />
        </div>
        <div className="form-group">
          <EmailInput className="form-control mb-3" />
        </div>
        <div className="form-group">
          <PasswordInput
            className="form-control mb-3"
            placeholder="Contraseña"
            id="registerPassword"
          />
        </div>
        <div className="form-group">
          <PasswordInput
            className="form-control mb-3"
            placeholder="Repite la contraseña"
            id="repeatPassword"
          />
        </div>

        <div className="form-check mb-0">
          <AdminCheckbox />
          <label className="form-check-label" htmlFor="esAdmin">
            Permisos de administrador
          </label>
        </div>

        <SendButton className="btn btn-lg my-4">Enviar</SendButton>
      </form>
    </Seccion>
  );
};

export default RegisterProfesor;
