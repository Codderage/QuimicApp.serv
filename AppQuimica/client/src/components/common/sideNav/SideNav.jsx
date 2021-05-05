import React, { useState } from "react";
import { SNav } from "./SideNav.styled";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./SideNav.css";
import { SideNavData } from "./SideNavData";

const SideNavBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <SNav className="navbar">
        <Link to="#" className="menu-bars">
          <FontAwesomeIcon icon={faBars} onClick={showSidebar} />
        </Link>
      </SNav>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-times">
              <FontAwesomeIcon icon={faTimes} onClick={showSidebar} />
            </Link>
          </li>
          {SideNavData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>{item.icon}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default SideNavBar;
