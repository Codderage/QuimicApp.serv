import { Table, Space } from "antd";
import React, { useEffect, useState, createContext, useContext } from "react";
import { User } from "../../App";
import axios from "../common/http";
import swal from "sweetalert";
import carga from "../../assets/img/load/ajax-loader.gif";
import Swal from "sweetalert2";

// import { Link, useHistory } from "react-router-dom";

// const history = useHistory();
const columns = [
  {
    title: "Usuario",
    dataIndex: "nombreUsuario",
    sorter: (a, b) => a.nombreUsuario - b.nombreUsuario,
  },
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
            onUpdate(
              record.id,
              record.nombre,
              record.apellidos,
              record.email,
              record.nombreUsuario,
              record.idUsuario,
              e
            );
          }}
        >
          Editar
        </button>
        <button
          className=""
          onClick={(e) => {
            onDelete(record.idUsuario);
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

const onDelete = (id) => {
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

      swal({
        //title: "Comprobando ...",
        icon: carga,
        button: false,
        allowOutsideClick: false,
      });
      axios
        .delete("delete-usuario/" + id)
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
    } else {
      //swal("Usuario no eliminado");
    }
  });

  //console.log(key, e);
};

const onUpdate = (
  key,
  nombre,
  apellidos,
  email,
  nombreUsuario,
  idUsuario,
  e
) => {
  //e.preventDefault();
  //const data = this.state.data.filter(item => item.key !== key);
  //this.setState({ data, isPageTween: false });
  console.log(key, e);
  //history.push("/editUsuario");

  Swal.fire({
    title: "Editar",
    html: `<label for='EnombreUsuario'>Usuario:</label>
    <input class="swal2-input" id='EnombreUsuario' type='text' value=${nombreUsuario}>
    <label for='Enombre'>Nombre:</label>
    <input class="swal2-input" id='Enombre' type='text' value=${nombre}>
    <label for='Eapellidos'>Apellidos:</label>
    <input class="swal2-input" id='Eapellidos' type='text' value=${apellidos}>
    <label for='Eemail'>Email:</label>
    <input class="swal2-input" id='Eemail' type='email' value=${email}>
    `,
    // <input id='Eprofe' type='checkbox'>
    // <label class="swal2-input" for='Eprofe'>&nbsp;Es profesor</label><br>
    // <input id='Eadmin' type='checkbox'>
    // <label class="swal2-input" for='Eadmin'>&nbsp;Es admin</label>
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Editar",
    cancelButtonText: "Cancelar",
    focusConfirm: false,
    preConfirm: () => {
      const Enombre = Swal.getPopup().querySelector("#Enombre").value;
      const Eapellidos = Swal.getPopup().querySelector("#Eapellidos").value;
      const Eemail = Swal.getPopup().querySelector("#Eemail").value;
      const EnombreUsuario =
        Swal.getPopup().querySelector("#EnombreUsuario").value;
      //const Eprofe = Swal.getPopup().querySelector("#Eprofe").checked;
      //const Eadmin = Swal.getPopup().querySelector("#Eadmin").checked;
      if (!Enombre || !Eapellidos || !Eemail || !EnombreUsuario) {
        Swal.showValidationMessage(`Algún campo obligatorio vacío`);
      }
      return {
        Enombre: Enombre,
        Eapellidos: Eapellidos,
        Eemail: Eemail,
        EnombreUsuario: EnombreUsuario,
        //Eadmin: Eadmin,
      };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      swal({
        //title: "Comprobando ...",
        icon: carga,
        button: false,
        allowOutsideClick: false,
      });
      axios
        .put("update-usuario/" + `${idUsuario}`, {
          nombre: `${result.value.Enombre}`,
          apellidos: `${result.value.Eapellidos}`,
          email: `${result.value.Eemail}`,
          username: `${result.value.EnombreUsuario}`,
        })
        .then((response) => {
          //console.log(response.data);
          if (response.status >= 200 && response.status <= 205) {
            //console.log(response.data[1].nombre);
            //console.log(response.data);
            window.location.reload(true);
            //Users.array1[key].nombreUsuario = response.data.nombreUsuario;
            //Users.array1[key].nombre = response.data.nombre;
            //Users.array1[key].apellidos = response.data.apellidos;

            // swal({
            //   icon: "success",
            //   title: "Actualizado",
            //   text: `
            //     Usuario: ${result.value.EnombreUsuario}
            //     Nombre: ${result.value.Enombre}
            //     Apellidos: ${result.value.Eapellidos}
            //     Email: ${result.value.Eemail}
            //   `,
            // });
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
    }
  });
};

const showHeader = true;

const pagination = { position: "bottom" };

const Users = () => {
  const { token } = useContext(User);
  const [datos1, setDatos1] = useState();

  const array = [];
  const array1 = [];

  useEffect(async () => {
    //console.log(token, axios, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaa");
    if (localStorage.getItem("token") && localStorage.getItem("user")) {
      // console.log(user);
      //if (user.id_profesor) {
      var usuarioLogeado = JSON.parse(localStorage.getItem("user"));
      //console.log(usuarioLogeado);
      if (usuarioLogeado.id_profesor) {
        //LARAVEL CONTROLA SI EL USUARIO QUE PIDE ES ADMIN O NO
        await axios
          .get("usuarios")
          .then((response) => {
            //console.log(response.data);
            if (response.status >= 200 && response.status <= 205) {
              //console.log(response.data[1].nombre);
              //console.log(response.data);
              for (let i = 0; i < response.data.length; i++) {
                //console.log(response.data[i]);
                array1.push({
                  key: i,
                  nombreUsuario: response.data[i].nombreUsuario,
                  nombre: response.data[i].nombre,
                  apellidos: response.data[i].apellidos,
                  email: response.data[i].email,
                  rol: response.data[i].tipo,
                  id: response.data[i].id,
                  idUsuario: response.data[i].idUsuario,
                });
              }

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

        //   if (usuarioLogeado.es_admin) {
        //     await axios
        //       .get("profesores")
        //       .then((response) => {
        //         //console.log(response.data);
        //         if (response.status >= 200 && response.status <= 205) {
        //           //console.log(response.data[1].nombre);
        //           //console.log(response.data);
        //           for (let e = i; e < response.data.length + i; e++) {
        //             //console.log(response.data[i].nombre);
        //             array1.push({
        //               key: e,
        //               nombreUsuario: response.data[e].nombreUsuario,
        //               nombre: response.data[e].nombre,
        //               apellidos: response.data[e].apellidos,
        //               email: response.data[e].email,
        //               rol: "Profesor",
        //               id: response.data[e].id,
        //               idUsuario: response.data[e].idUsuario,
        //             });
        //           }
        //           //history.push("/");
        //         }
        //       })
        //       .catch(function (error) {
        //         swal({
        //           title: "Error interno " + error.response.status,
        //           text: "Error interno, vuelve a intentarlo en unos momentos.",
        //           icon: "error",
        //           button: "Aceptar",
        //           timer: "3000",
        //         });
        //       });
        // }
      } else {
        //console.log("ALUMNO");
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
