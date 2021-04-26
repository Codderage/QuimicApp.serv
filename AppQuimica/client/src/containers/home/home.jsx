import React, { useState } from "react";
import Footer from "../../components/common/footer/Footer";
import NavBar from "../../components/common/navBar/NavBar";

const Landing = () => {
  const [getState, setState] = useState();

  return (
    <div>
      <NavBar />
      <Footer />
    </div>
  );
};

export default Landing;
