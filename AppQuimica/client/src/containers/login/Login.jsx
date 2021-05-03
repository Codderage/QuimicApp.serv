// import React, { useState } from "react";
import Footer from "../../components/common/footer/Footer";
import NavBar from "../../components/common/navBar/NavBar";
import Login from "../../components/login/Login";

const LoginPage = (props) => {
  // const [getState, setState] = useState();

  // console.log(props);

  return (
    <div>
      <NavBar />
      <Login set={props.setUser} />
      <Footer />
    </div>
  );
};

export default LoginPage;
