import React, { useState } from "react";
import { SNav } from "./NavBar.styled";

const NavBar = () => {
  const [getState, setState] = useState();

  return <SNav className="navbar navbar-expand-md" />;
};

export default NavBar;

/*
Logo
width: 48px;
height: auto;
*/
