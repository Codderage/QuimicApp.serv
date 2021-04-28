import React, { useState } from "react";
import Footer from "../../components/common/footer/Footer";
import NavBar from "../../components/common/navBar/NavBar";
import Login from "../../components/login/Login";

const LoginPage = () => {
  const [getState, setState] = useState();

  return (
    <div>
      <NavBar />
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;
