import React from "react";

import Nav from "./Nav";
import AuthNav from "./AuthNav";

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />
          <Nav />
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;