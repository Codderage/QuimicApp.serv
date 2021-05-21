import { Table } from "antd";
import React, { useEffect, useState } from "react";
// import { User } from "../../App";
import axios from "../common/http";
import swal from "sweetalert";
// import carga from "../../assets/img/load/ajax-loader.gif";

const columns = [
  {
    title: "Nombre",
    dataIndex: "nombre",
    sorter: (a, b) => a.nombre - b.nombre,
  },
  {
    title: "Apellidos",
    dataIndex: "apellidos",
    sorter: (a, b) => a.apellidos - b.apellidos,
  },
  {
    title: "Grupo",
    dataIndex: "grupo",
    sorter: (a, b) => a.grupo - b.grupo,
  },
  {
    title: "Email",
    dataIndex: "email",
    sorter: (a, b) => a.email - b.email,
  },
];

// const data = [];
// for (let i = 1; i <= 10; i++) {
//   data.push({
//     key: i,
//     nombre: "profesor",
//     apellidos: `profesor`,
//     rol: `${i % 2 ? "Profesor" : "Alumno"}`,
//   });
// }

const showHeader = true;

const pagination = { position: "bottom" };

const Grupos = () => {
  // const { token } = useContext(User);
  const [datos1, setDatos1] = useState();

  const array1 = [];

  useEffect(async () => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      await axios
        .get(
          "group-usuario" //,
          // {},
          // {
          //   headers: {
          //     Authorization: "Bearer " + sessionStorage.getItem("token"),
          //   },
          // }
        )
        .then((response) => {
          //console.log(response.data);
          if (response.status >= 200 && response.status <= 205) {
            //console.log(response.data[1].nombre);
            //console.log(response.data, response.data.length);
            for (let i = 0; i < response.data.length; i++) {
              //console.log(response.data[i]);
              array1.push({
                key: i,
                nombre: response.data[i].nombre,
                apellidos: response.data[i].apellidos,
                email: response.data[i].email,
                id_grupo: response.data[i].id_grupo,
                grupo: response.data[i].nombre_grupo,
              });
            }
            //console.log(array1);

            //history.push("/");
          }
        })
        .catch(function (error) {
          if (error.status == 401) {
            swal({
              title: "Error acceso " + error.response.status,
              text: "Error, no tienes acceso a esta sección.",
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
      //if (usuarioLogeado.id_profesor) {
      //} else {
      //console.log("ALUMNO");
      //columns.splice(5);
      //}
    }
    //console.log(array1);
    //console.log(array1);
    setDatos1(array1);
  }, []);

  const [state, setState] = useState({
    bordered: false,
    loading: false,
    pagination,
    size: "default",
    showHeader,
    rowSelection: {},
    scroll: undefined,
    hasData: true,
    tableLayout: "fixed",
    top: "none",
    bottom: "bottomRight",
    xScroll: false,
    yScroll: false,
  });

  const handleDataChange = (hasData) => {
    this.setState({ hasData });
  };

  const scroll = {};
  if (state.yScroll) {
    scroll.y = 240;
  }
  if (state.xScroll) {
    scroll.x = "100vw";
  }

  const tableColumns = columns.map((item) => ({
    ...item,
    ellipsis: state.ellipsis,
  }));
  if (state.xScroll === "fixed") {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = "right";
  }

  const nombreUsu = sessionStorage.getItem("user").username;

  const mensajeGrupo = () => {
    var usuarioLogeado = JSON.parse(sessionStorage.getItem("user"));
    if (array1[0].grupo) {
      return (
        usuarioLogeado.username +
        " estas en el grupo " +
        array1[0].grupo +
        " con estos otros usuarios."
      );
    } else {
      return usuarioLogeado.username + " no estás asignado en ningún grupo.";
    }
  };

  return (
    <>
      {/* {peticion} */}
      <h3>Estos son los datos de tu grupo.</h3>
      <Table
        {...state}
        pagination={{ position: [state.top, state.bottom] }}
        columns={tableColumns}
        dataSource={datos1 ? datos1 : null}
        scroll={scroll}
      />
    </>
  );
};

export default Grupos;
