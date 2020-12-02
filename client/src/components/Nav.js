import React from "react";
import { Link, useLocation } from "react-router-dom";



function NavTabs() {

  const location = useLocation();

  return (
    <>
    <nav id="navbar" className="nav-wrapper">
      <Header className="col-8"></Header>
    <ul id="menu">
      <li className="nav-item">
        <Link to="/shakers" className={location.pathname === "/shakers" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
    </ul>
    </nav>
    
    </>
  );
}

export default NavTabs;
