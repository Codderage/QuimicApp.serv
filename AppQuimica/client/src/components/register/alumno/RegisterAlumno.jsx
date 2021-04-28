import React, { useState } from "react";

import swal from "sweetalert";
import axios from "axios";
import carga from "../../../assets/img/load/ajax-loader.gif";
import Cookies from "universal-cookie";
import Select from "react-select/async";

import {
  EmailInput,
  PasswordInput,
  SendButton,
  Seccion,
  TextInput,
  Title,
} from "./registerAlumno.styled";

const RegisterAlumno = () => {
  const [get, set] = useState();

  const options = [
    { value: "1", label: "Grupo Daw" },
    { value: "2", label: "Grupo Dam" },
    { value: "3", label: "Grupo Asix" },
  ];

  return (
    <Seccion className="container d-flex flex-column justify-content-centre align-items-center">
      <div>
        <Title>Registrar Alumno</Title>
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
        <div>
          <Select options={options} placeholder="Grupo (opcional)" />
        </div>

        <SendButton className="btn btn-lg my-4">Enviar</SendButton>
      </form>
    </Seccion>
  );
};

export default RegisterAlumno;
