import React from "react";
import { Link } from "react-router-dom";
import * as RBS from "react-bootstrap";
import LogoutButton from "./LogoutButton";
import logo from "../images/NewFaviconNoWriting.svg";
import { useAuth0 } from "../react-auth0-spa";
// import Authenticated from "../components/Authenticated";


function Nav() {

  const { isAuthenticated } = useAuth0();
  return (
    <>
    {isAuthenticated ? (
    <RBS.Navbar className="navStyle" bg="transparent" expand="lg">
      <img className="imgNav" src={logo}  alt="Shaker Mason Jar"/>
      {/* <RBS.Nav.Link as={Link} to="/shaker"> <span className="mainNav">Shake It Up</span></RBS.Nav.Link>  */}
      <RBS.Navbar.Collapse id="basic-navbar-nav">
        <RBS.Nav className="mr-auto">
          <RBS.Nav>
          <RBS.Nav.Link as={Link} to="/shaker">shake it</RBS.Nav.Link>
            <RBS.Nav.Link as={Link} to="/contact">contact</RBS.Nav.Link>
            <RBS.Nav.Link as={Link} to="/viewthemes">themes</RBS.Nav.Link> 
            <RBS.Nav.Link as={Link} to="/profile">profile</RBS.Nav.Link>            
          </RBS.Nav>
        </RBS.Nav>
      </RBS.Navbar.Collapse>
      {/* <Authenticated /> */}

    </RBS.Navbar>
  ) : (

    <RBS.Navbar className="navStyle" bg="transparent" expand="lg">

      <img className="imgNav"  src={logo} alt="Shaker Mason Jar"/>
      {/* <RBS.Nav.Link as={Link} to="/shaker"> <span className="mainNav">Shake It Up</span></RBS.Nav.Link>  */}
      <RBS.Navbar.Collapse id="basic-navbar-nav">
        <RBS.Nav className="mr-auto">
          <RBS.Nav>
          <RBS.Nav.Link as={Link} to="/shaker">shake it</RBS.Nav.Link>
            <RBS.Nav.Link as={Link} to="/contact">contact</RBS.Nav.Link>
            <RBS.Nav.Link as={Link} to="/viewthemes">themes</RBS.Nav.Link> 
          </RBS.Nav>
        </RBS.Nav>
      </RBS.Navbar.Collapse>
      {/* <Authenticated /> */}

    </RBS.Navbar>



  )}
    </>
    
  )
};

export default Nav;

