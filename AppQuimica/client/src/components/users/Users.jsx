import { Table, Space } from "antd";
import React, { useEffect, useState, createContext, useContext } from "react";
import { User } from "../../App";
import axios from "axios";
import swal from "sweetalert";
import carga from "../../assets/img/load/ajax-loader.gif";
import { User } from "../../App";

const { token } = useContext(User);

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
  {
    title: "Rol",
    dataIndex: "rol",
    sorter: (a, b) => a.rol - b.rol,
  },
  {
    title: "",
    key: "accion",
    dataIndex: "accion",
    render: (text, record) => (
      <Space size="middle">
        <button
          className=""
          onClick={(e) => {
            onUpdate(record.id, e);
          }}
        >
          Editar
        </button>
        <button
          className=""
          onClick={(e) => {
            onDelete(record.id, record.rol, record.key);
          }}
        >
          Delete
        </button>
      </Space>
    ),
  },
];

const data = [];
// for (let i = 1; i <= 10; i++) {
//   data.push({
//     key: i,
//     nombre: "profesor",
//     apellidos: `profesor`,
//     rol: `${i % 2 ? "Profesor" : "Alumno"}`,
//   });
// }

const onDelete = (id, rol, key) => {
  swal({
    title: "¿Estás seguro?",
    text: "Una vez eliminado no podrás volver a recuperar el usuario",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      //SI
      //console.log(rol);
      let ruta = "";
      if (rol == "Alumno") ruta = "delete-usuario-al/" + id;
      else if (rol == "Profesor") ruta = "delete-usuario-pr/" + id;
      swal({
        //title: "Comprobando ...",
        icon: carga,
        button: false,
        allowOutsideClick: false,
      });
      axios
        .delete(ruta)
        .then((response) => {
          //console.log(response.data);
          if (response.status >= 200 && response.status <= 205) {
            window.location.reload(true);

            swal({
              title: "Usuario eliminado",
              text: "  ",
              icon: "success",
              button: false,
              timer: "1800",
            });
          }
        })
        .catch(function (error) {
          swal({
            title: "Error interno " + error.response.status,
            text: "Error interno, vuelve a intentarlo en unos momentos.",
            icon: "error",
            button: "Aceptar",
            timer: "3000",
          });
        });
    } else {
      //swal("Usuario no eliminado");
    }
  });

  //console.log(key, e);
};

const onUpdate = (key, e) => {
  //e.preventDefault();
  //const data = this.state.data.filter(item => item.key !== key);
  //this.setState({ data, isPageTween: false });
  console.log(key, e);
};

const showHeader = true;

const pagination = { position: "bottom" };

const Users = () => {
  const { user } = useContext(User);
  const [datos1, setDatos1] = useState();

  const array1 = [];

  useEffect(async () => {
    if (localStorage.getItem("token") && localStorage.getItem("user")) {
      // console.log(user);
      //if (user.id_profesor) {
      var usuarioLogeado = JSON.parse(localStorage.getItem("user"));
      console.log(usuarioLogeado);
      if (usuarioLogeado.id_profesor) {
        //LARAVEL CONTROLA SI EL USUARIO QUE PIDE ES ADMIN O NO
        await axios
          .get(
            "alumnos")
          .then((response) => {
            //console.log(response.data);
            if (response.status >= 200 && response.status <= 205) {
              //console.log(response.data[1].nombre);
              console.log(response.data);
              for (let i = 0; i < response.data.length; i++) {
                //console.log(response.data[i].nombre);
                array1.push({
                  key: i,
                  nombre: response.data[i].nombre,
                  apellidos: response.data[i].apellidos,
                  email: response.data[i].email,
                  rol: "Alumno",
                  id: response.data[i].id,
                });
              }
              //history.push("/");
            }
          })
          .catch(function (error) {
            swal({
              title: "Error interno " + error.response.status,
              text: "Error interno, vuelve a intentarlo en unos momentos.",
              icon: "error",
              button: "Aceptar",
              timer: "3000",
            });
          });
      } else {
        console.log("ALUMNO");
        columns.splice(4);
        for (let i = 1; i <= 3; i++) {
          array1.push({
            key: i,
            nombre: "alumno",
            apellidos: `alumno`,
          });
        }
      }
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

  return (
    <>
      {/* {peticion} */}
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

export default Users;
