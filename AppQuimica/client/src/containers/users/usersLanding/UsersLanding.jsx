import React, { useContext } from "react";
// import styled from "styled-components";
// import { User } from "../../../App";
import SideNavBar from "../../../components/common/sideNav/SideNav";
import Users from "../../../components/users/Users";

const UsersLanding = () => {
  // const { user } = useContext(User);

  return (
    <div>
      <SideNavBar />
      <Users />
    </div>
  );
};

export default UsersLanding;
