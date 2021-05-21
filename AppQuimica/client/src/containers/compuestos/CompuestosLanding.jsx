import React, { useContext } from "react";
// import { User } from "../../../App";
import SideNavBar from "../../components/common/sideNav/SideNav";
// import SearchBar from "../../../components/searchBar/SearchBar";
import Compuestos from "../../components/compuestos/compuestos";

const CompuestosLanding = () => {
  // const { user } = useContext(User);

  return (
    <>
      <SideNavBar />
      <Compuestos />
    </>
  );
};

export default CompuestosLanding;
