import { Table, Space } from "antd";
import React, { useEffect, useState, createContext } from "react";

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

for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    nombre: "John",
    apellidos: `Brown`,
    rol: `${i % 2 ? "Profesor" : "Alumno"}`,
  });
}

const showHeader = true;

const pagination = { position: "bottom" };

const Users = () => {
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
        dataSource={state.hasData ? data : null}
        scroll={scroll}
      />
    </>
  );
};

export default Users;
