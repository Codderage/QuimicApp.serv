import { Table, Space } from "antd";
import React, { useEffect, useState, createContext, useContext } from "react";
import { User } from "../../App";

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
    title: "Rol",
    dataIndex: "rol",
    sorter: (a, b) => a.rol - b.rol,
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
    title: "Accion",
    key: "accion",
    render: () => (
      <Space size="middle">
        <button>Editar</button>
        <button>Borrar</button>
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

const showHeader = true;

const pagination = { position: "bottom" };

const Users = () => {
  const { user } = useContext(User);
  const [datos1, setDatos1] = useState();

  let array1 = [];

  useEffect(async () => {
    // if (localStorage.getItem("token")) {
    //   if (user.id_profesor) {
    //     //LARAVEL CONTROLA SI EL USUARIO QUE PIDE ES ADMIN O NO
    //     for (let i = 1; i <= 10; i++) {
    //       data.push({
    //         key: i,
    //         nombre: "profesor",
    //         apellidos: `profesor`,
    //         rol: `${i % 2 ? "Profesor" : "Alumno"}`,
    //       });
    //     }
    //   } else {
    //     for (let i = 1; i <= 10; i++) {
    //       data.push({
    //         key: i,
    //         nombre: "alumno",
    //         apellidos: `alumno`,
    //       });
    //     }
    //   }
    // }
    for (let i = 1; i <= 10; i++) {
      array1.push({
        key: i,
        nombre: "profesor",
        apellidos: `profesor`,
        rol: `${i % 2 ? "Profesor" : "Alumno"}`,
      });
    }
    console.log(array1);
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
