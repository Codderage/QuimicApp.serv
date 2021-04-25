import React from "react";
import axios from "axios";
import Login from "../landing/login/Login";

const url =
  "http://localhost/Clase/ProyectoFinal/Quimica/quimica/AppQuimica/server/public/api/";

// const peticionGet = (props) => {
//   let resultado;
//   axios
//     .get(url + props.ruta)
//     .then((response) => {
//       resultado = response.data;
//     })
//     .catch(console.log());
//   console.log("HHHHHH");
//   return resultado;
// };

function peticionGet(props) {
  let resultado;
  axios
    .get(url + props)
    .then((response) => {
      console.log(url + props);
      //console.log(response.data);
      //resultado = response.data;
    })
    .catch(console.log());
  console.log("HHHHHH");
  return resultado;
}

export default peticionGet;
