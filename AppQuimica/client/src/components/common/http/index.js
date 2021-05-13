import axios from "axios";
const instance = axios.create({
  baseURL:
    "http://localhost/Clase/ProyectoFinal/Quimica/quimica/AppQuimica/server/public/api/",
});
export default instance;
