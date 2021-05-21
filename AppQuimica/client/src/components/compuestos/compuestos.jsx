import { Table, Space } from "antd";
import React, { useEffect, useState, useContext } from "react";
import { User } from "../../App";
import axios from "../common/http";
import swal from "sweetalert";
import carga from "../../assets/img/load/ajax-loader.gif";
import Swal from "sweetalert2";

const columns = [
  {
    title: "Nombre",
    dataIndex: "nombreCompuesto",
    // sorter: (a, b) => a.nombreCompuesto - b.nombreCompuesto,
  },
  {
    title: "Descripción",
    dataIndex: "descripcion",
    // sorter: (a, b) => a.descripcion - b.descripcion,
  },
  {
    title: "Fórmula",
    dataIndex: "formula",
    // sorter: (a, b) => a.formula - b.formula,
  },
  {
    title: "Tipo",
    dataIndex: "tipo",
    // sorter: (a, b) => a.tipo - b.tipo,
  },
  {
    title: "Estructura",
    dataIndex: "estructura",
    // sorter: (a, b) => a.estructura - b.estructura,
  },
  {
    title: "",
    key: "accion",
    dataIndex: "accion",
    render: (text, record) => (
      <Space size="middle">
        <button
          className="btn btn-primary"
          onClick={(e) => {
            onUpdate(
              record.key,
              record.idCompuesto,
              record.nombreCompuesto,
              record.descripcion,
              record.formula,
              record.tipo,
              record.estructura,
              e
            );
          }}
        >
          Editar
        </button>
        <button
          className="btn btn-danger"
          // onClick={(e) => {
          //   onDelete(record.idCompuesto);
          // }}
        >
          Eliminar
        </button>
      </Space>
    ),
  },
];

// const onCreate = () => {
//     Swal.fire({
//         title: "Crear usuario",
//         html: `<label for='EnombreUsuario'>Usuario:</label>
//     <input class="swal2-input" id='EnombreUsuario' type='text' placeholder="Nombre usuario">
//     <label for='Epassword'>Password:</label>
//     <input class="swal2-input" id='Enombre' type='text'>
//     <label for='Enombre'>Nombre:</label>
//     <input class="swal2-input" id='Enombre' type='text' placeholder="Nombre">
//     <label for='Eapellidos'>Apellidos:</label>
//     <input class="swal2-input" id='Eapellidos' type='text' placeholder="Apellidos">
//     <label for='Eemail'>Email:</label>
//     <input class="swal2-input" id='Eemail' type='email' placeholder="Email">
//     `,
//          <input id='Eprofe' type='checkbox'>
//          <label class="swal2-input" for='Eprofe'>&nbsp;Es profesor</label><br>
//          <input id='Eadmin' type='checkbox'>
//          <label class="swal2-input" for='Eadmin'>&nbsp;Es admin</label>
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Editar",
//         cancelButtonText: "Cancelar",
//         focusConfirm: false,
//         preConfirm: () => {
//             const Enombre = Swal.getPopup().querySelector("#Enombre").value;
//             const Eapellidos = Swal.getPopup().querySelector("#Eapellidos").value;
//             const Eemail = Swal.getPopup().querySelector("#Eemail").value;
//             const EnombreUsuario =
//                 Swal.getPopup().querySelector("#EnombreUsuario").value;
//             const Egrupo = Swal.getPopup().querySelector("#Egrupo").value;
//             alert(Egrupo);
//             const Eprofe = Swal.getPopup().querySelector("#Eprofe").checked;
//             const Eadmin = Swal.getPopup().querySelector("#Eadmin").checked;
//             if (!Enombre || !Eapellidos || !Eemail || !EnombreUsuario) {
//                 Swal.showValidationMessage(`Algún campo obligatorio vacío`);
//             }
//             return {
//                 Enombre: Enombre,
//                 Eapellidos: Eapellidos,
//                 Eemail: Eemail,
//                 EnombreUsuario: EnombreUsuario,
//                 Egrupo: Egrupo,
//                 Eadmin: Eadmin,
//             };
//         },
//     }).then((result) => {
//         if (result.isConfirmed) {
//             swal({
//                 title: "Comprobando ...",
//                 icon: carga,
//                 button: false,
//                 allowOutsideClick: false,
//             });
//             let peticion = [];
//             if (result.value.Egrupo == "-1") {
//                 peticion = {
//                     nombre: `${result.value.Enombre}`,
//                     apellidos: `${result.value.Eapellidos}`,
//                     email: `${result.value.Eemail}`,
//                     username: `${result.value.EnombreUsuario}`,
//                     id_grupo: null,
//                 };
//             } else if (result.value.Egrupo != "null") {
//                 peticion = {
//                     nombre: `${result.value.Enombre}`,
//                     apellidos: `${result.value.Eapellidos}`,
//                     email: `${result.value.Eemail}`,
//                     username: `${result.value.EnombreUsuario}`,
//                     id_grupo: `${result.value.Egrupo}`,
//                 };
//             } else {
//                 peticion = {
//                     nombre: `${result.value.Enombre}`,
//                     apellidos: `${result.value.Eapellidos}`,
//                     email: `${result.value.Eemail}`,
//                     username: `${result.value.EnombreUsuario}`,
//                 };
//             }
//             axios
//                 .put("update-usuario/" + ``, peticion)
//                 .then((response) => {
//                     console.log(response.data);
//                     if (response.status >= 200 && response.status <= 205) {
//                         console.log(response.data[1].nombre);
//                         console.log(response.data);
//                         window.location.reload(true);
//                         Users.array1[key].nombreUsuario = response.data.nombreUsuario;
//                         Users.array1[key].nombre = response.data.nombre;
//                         Users.array1[key].apellidos = response.data.apellidos;

//                          swal({
//                            icon: "success",
//                            title: "Actualizado",
//                            text: `
//                              Usuario: ${result.value.EnombreUsuario}
//                              Nombre: ${result.value.Enombre}
//                              Apellidos: ${result.value.Eapellidos}
//                              Email: ${result.value.Eemail}
//                            `,
//                          });
//                     }
//                 })
//                 .catch(function (error) {
//                     if (error.status == 401) {
//                         swal({
//                             title: "Error acceso " + error.response.status,
//                             text: "Error, no tienes acceso a esta sección.",
//                             icon: "error",
//                             button: "Aceptar",
//                             timer: "3000",
//                         });
//                     } else {
//                         swal({
//                             title: "Error interno " + error.response.status,
//                             text: "Error interno, vuelve a intentarlo en unos momentos.",
//                             icon: "error",
//                             button: "Aceptar",
//                             timer: "3000",
//                         });
//                     }
//                 });
//         }
//     });
// };

// const onDelete = (id) => {
//     swal({
//         title: "¿Estás seguro?",
//         text: "Una vez eliminado no podrás volver a recuperar el usuario",
//         icon: "warning",
//         buttons: true,
//         dangerMode: true,
//     }).then((willDelete) => {
//         if (willDelete) {
//             SI
//             console.log(rol);

//             swal({
//                 title: "Comprobando ...",
//                 icon: carga,
//                 button: false,
//                 allowOutsideClick: false,
//             });
//             axios
//                 .delete("delete-usuario/" + id)
//                 .then((response) => {
//                     console.log(response.data);
//                     if (response.status >= 200 && response.status <= 205) {
//                         var usuarioLogeado = JSON.parse(sessionStorage.getItem("user"));
//                         if (usuarioLogeado.id_profesor) {
//                             window.location.reload(true);
//                         } else {
//                             sessionStorage.clear();
//                             window.location.href = "/";
//                         }
//                         swal({
//                             title: "Usuario eliminado",
//                             text: "  ",
//                             icon: "success",
//                             button: false,
//                             timer: "1800",
//                         });
//                     }
//                 })
//                 .catch(function (error) {
//                     if (error.status == 401) {
//                         swal({
//                             title: "Error acceso " + error.response.status,
//                             text: "Error, no tienes acceso a esta sección.",
//                             icon: "error",
//                             button: "Aceptar",
//                             timer: "3000",
//                         });
//                     } else {
//                         swal({
//                             title: "Error interno " + error.response.status,
//                             text: "Error interno, vuelve a intentarlo en unos momentos.",
//                             icon: "error",
//                             button: "Aceptar",
//                             timer: "3000",
//                         });
//                     }
//                 });
//         } else {
//             swal("Usuario no eliminado");
//         }
//     });

//     console.log(key, e);
// };

const onUpdate = async (
  key,
  idCompuesto,
  nombreCompuesto,
  descripcion,
  formula,
  tipo,
  estructura,
  e
) => {
  //e.preventDefault();
  //const data = this.state.data.filter(item => item.key !== key);
  //this.setState({ data, isPageTween: false });
  //console.log(key, e);
  //history.push("/editUsuario");
  // const grupos = await groups(rol, id_grupo, grupo);
  //console.log(grupos, "AAAAAAAAAAAAAAAAAAAAAA");
  Swal.fire({
    title: "Editar",
    html: `<label for='EnombreCompuesto'>Nombre:</label>
    <input class="swal2-input" id='EnombreCompuesto' type='text' value='${nombreCompuesto}'>
    <label for='Edescripcion'>Descripción:</label>
    <input class="swal2-input" id='Edescripcion' type='text' value='${descripcion}'>
    <label for='Eformula'>Fórmula:</label>
    <input class="swal2-input" id='Eformula' type='text' value='${formula}'>
    <label for='Etipo'>Tipo:</label>
    <input class="swal2-input" id='Etipo' type='text' value='${tipo}'>
    <label for='Eestructura'>Estructura:</label>
    <input class="swal2-input" id='Eestructura' type='text' value='${estructura}'>`,
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
      const EnombreCompuesto =
        Swal.getPopup().querySelector("#EnombreCompuesto").value;
      const Edescripcion = Swal.getPopup().querySelector("#Edescripcion").value;
      const Eformula = Swal.getPopup().querySelector("#Eformula").value;
      const Etipo = Swal.getPopup().querySelector("#Etipo").value;
      const Eestructura = Swal.getPopup().querySelector("#Eestructura").value;
      //alert(Egrupo);
      //const Eprofe = Swal.getPopup().querySelector("#Eprofe").checked;
      //const Eadmin = Swal.getPopup().querySelector("#Eadmin").checked;
      if (
        !EnombreCompuesto ||
        !Edescripcion ||
        !Eformula ||
        !Etipo ||
        !Eestructura
      ) {
        Swal.showValidationMessage(`Algún campo obligatorio vacío`);
      }
      return {
        EnombreCompuesto: EnombreCompuesto,
        Edescripcion: Edescripcion,
        Eformula: Eformula,
        Etipo: Etipo,
        Eestructura: Eestructura,
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
      let peticion = [];
      peticion = {
        nombre: `${result.value.EnombreCompuesto}`,
        formula: `${result.value.Eformula}`,
        descripcion: `${result.value.Edescripcion}`,
        tipo: `${result.value.Etipo}`,
        estructura: `${result.value.Eestructura}`,
      };
      axios
        .put("compuesto-quimico/" + `${idCompuesto}`, peticion)
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

const pagination = {
  position: "bottom",
};

const Compuestos = () => {
  // const { token } = useContext(User);
  const [datos, setDatos] = useState();

  const array = [];

  useEffect(async () => {
    //console.log(token, axios, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaa");
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      // console.log(user);
      //if (user.id_profesor) {
      var usuarioLogeado = JSON.parse(sessionStorage.getItem("user"));
      //console.log(usuarioLogeado);

      //LARAVEL CONTROLA SI EL USUARIO QUE PIDE ES ADMIN O NO
      await axios
        .get("compuestos-quimicos")
        .then((response) => {
          //console.log(response.data);
          if (response.status >= 200 && response.status <= 205) {
            //console.log(response.data[1].nombre);
            //console.log(response.data, response.data.length);
            for (let i = 0; i < response.data.length; i++) {
              //console.log(response.data[i]);
              array.push({
                key: i,
                nombreCompuesto: response.data[i].nombre,
                descripcion: response.data[i].descripcion,
                formula: response.data[i].formula,
                tipo: response.data[i].tipo,
                estructura: response.data[i].estructura,
                idCompuesto: response.data[i].id,
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
    setDatos(array);
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
      <Table
        {...state}
        pagination={{ position: [state.top, state.bottom] }}
        columns={tableColumns}
        dataSource={datos ? datos : null}
        scroll={scroll}
      />
    </>
  );
};

export default Compuestos;
