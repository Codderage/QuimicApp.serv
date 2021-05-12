import React, { useState, useContext } from "react";
import { SNav } from "./SideNav.styled";
import { faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./SideNav.css";
import { SideNavData } from "./SideNavData";
import { User } from "../../../App";
// import { Logout } from "./Logout";

const SideNavBar = () => {
  const { user } = useContext(User);

  const [sidebar, setSidebar] = useState(false);

  const logged = user ? (
    <span>
      Welcome {user.username} |{" "}
      {/* <Link onClick={console.log("HOLA")} className="logged"> */}
      <Link to="/login" className="logged">
        Logout
      </Link>
    </span>
  ) : (
    <Link to="/login" className="logged">
      <FontAwesomeIcon icon={faUser} />
      <span> Login</span>
    </Link>
  );

  const verifyUser = user ? (
    // SideNavData.map((item, index) => {
    //   if (user.id_profesor != null) {
    //     return (
    //       <li key={index} className={item.cName}>
    //         <Link to={item.path}>{item.icon}</Link>
    //       </li>
    //     );
    //   } else {
    //     return (
    //       <li key={index} className={item.cName}>
    //         <Link to={item.path}>{item.icon}</Link>
    //       </li>
    //     );
    //   }
    // });
    SideNavData.map((item, index) => {
      if (user.id_profesor != null) {
        return (
          <li key={index} className={item.cName}>
            <Link to={item.path}>{item.icon}</Link>
          </li>
        );
      } else {
        if (item.path != "/componentes" && item.path != "/compuestos") {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>{item.icon}</Link>
            </li>
          );
        }
      }
    })
  ) : (
    <li>
      <p></p>
    </li>
  );

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <SNav className="navbar">
        <Link to="#" className="menu-bars">
          <FontAwesomeIcon icon={faBars} onClick={showSidebar} />
        </Link>
        {logged}
      </SNav>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-times">
              <FontAwesomeIcon icon={faTimes} onClick={showSidebar} />
            </Link>
          </li>
          <li>{verifyUser}</li>
        </ul>
      </nav>
    </>
  );
};

export default SideNavBar;
