import React, { useContext } from "react";
// import styled from "styled-components";
// import { User } from "../../../App";
import SideNavBar from "../../../components/common/sideNav/SideNav";
import EditUsers from "../../../components/users/editUser/editUser";

const editUser = () => {
  // const { user } = useContext(User);

  return (
    <div>
      <SideNavBar />
      <EditUsers />
    </div>
  );
};

export default editUser;
