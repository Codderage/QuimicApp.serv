import React, { useContext } from "react";
// import styled from "styled-components";
// import { User } from "../../../App";
import SideNavBar from "../../components/common/sideNav/SideNav";
import Grupos from "../../components/grupos/Grupos";

const grupos = () => {
  // const { user } = useContext(User);

  return (
    <div>
      <SideNavBar />
      <Grupos />
    </div>
  );
};

export default grupos;
