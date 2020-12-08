import React from "react";
import { Link } from "react-router-dom";
import * as RBS from "react-bootstrap";
import LogoutButton from "./LogoutButton";
<<<<<<< HEAD
import logo from "../images/NewFaviconNoWriting.svg";
=======
import logo from "../images/New_Jar.svg";
import { useAuth0 } from "../react-auth0-spa";
import Authenticated from "../components/Authenticated";
>>>>>>> main


function Nav() {

  const { isAuthenticated } = useAuth0();

  return (
    <>
    {isAuthenticated ? (
    <RBS.Navbar className="navStyle" bg="transparent" expand="lg">

      <img className="imgNav" src={logo} alt="Shaker Mason Jar"/>
      <RBS.Nav.Link as={Link} to="/shaker"> <span className="mainNav">Shake It Up</span></RBS.Nav.Link> 
      <RBS.Navbar.Collapse id="basic-navbar-nav">
        <RBS.Nav className="mr-auto">
          <RBS.Nav>
            <RBS.Nav.Link as={Link} to="/contact">Contact</RBS.Nav.Link>
            <RBS.Nav.Link as={Link} to="/viewthemes">Themes</RBS.Nav.Link> 
            <RBS.Nav.Link as={Link} to="/profile">Profile</RBS.Nav.Link>            
          </RBS.Nav>
        </RBS.Nav>
      </RBS.Navbar.Collapse>

      {/* <LogoutButton /> */}
      <Authenticated />

    </RBS.Navbar>
  ) : (

    <RBS.Navbar className="navStyle" bg="transparent" expand="lg">

      <img className="imgNav" src={logo} alt="Shaker Mason Jar"/>
      <RBS.Nav.Link as={Link} to="/shaker"> <span className="mainNav">Shake It Up</span></RBS.Nav.Link> 
      <RBS.Navbar.Collapse id="basic-navbar-nav">
        <RBS.Nav className="mr-auto">
          <RBS.Nav>
            <RBS.Nav.Link as={Link} to="/contact">Contact</RBS.Nav.Link>
            <RBS.Nav.Link as={Link} to="/viewthemes">Themes</RBS.Nav.Link> 
          </RBS.Nav>
        </RBS.Nav>
      </RBS.Navbar.Collapse>

<<<<<<< HEAD
      <LogoutButton className="logout-button" />
=======
      {/* <LogoutButton /> */}
      <Authenticated />
>>>>>>> main

    </RBS.Navbar>



  )}
    </>
    
  )
};

export default Nav;

