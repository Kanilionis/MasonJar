import React from "react";
import { Link } from "react-router-dom";
import * as RBS from "react-bootstrap";
import shaker from "./30644-200.png"
// import AuthNav from "./AuthNav";
// import AuthBtn from "./AuthBtn";
import LogoutButton from "./LogoutButton";
import logo from "../images/NewFaviconNoWriting.svg";


function Nav() {
  return (
    <>

    <RBS.Navbar className="navStyle" bg="transparent" expand="lg">

      <img className="imgNav" src={logo} alt="Shaker Mason Jar"/>

      {/* <RBS.Navbar.Brand> */}
        <RBS.Nav.Link as={Link} to="/shaker"> <span className="mainNav">Shake It Up</span></RBS.Nav.Link> 
        
      {/* </RBS.Navbar.Brand> */}

      <RBS.Navbar.Collapse id="basic-navbar-nav">
        <RBS.Nav className="mr-auto">
          <RBS.Nav>
            <RBS.Nav.Link as={Link} to="/contact">Contact</RBS.Nav.Link>
            <RBS.Nav.Link as={Link} to="/viewthemes">Themes</RBS.Nav.Link> 
            <RBS.Nav.Link as={Link} to="/profile">Profile</RBS.Nav.Link>           
          </RBS.Nav>
        </RBS.Nav>
      </RBS.Navbar.Collapse>

      <LogoutButton className="logout-button" />

    </RBS.Navbar>
    </>
    
  )
};

export default Nav;

