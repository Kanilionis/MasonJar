import React from "react";
import { Link } from "react-router-dom";
import * as RBS from "react-bootstrap";
import logo from "../images/NewFaviconNoWriting.svg";
import { useAuth0 } from "@auth0/auth0-react";



function Nav() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <>
    {isAuthenticated ? (
      <RBS.Navbar className="navStyle" bg="transparent" expand="lg">
      <img className="imgNav" src={logo}  alt="Shaker Mason Jar"/>
      <RBS.Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <RBS.Navbar.Collapse id="basic-navbar-nav">
        <RBS.Nav className="mr-auto">
          <RBS.Nav.Link as={Link} to="/shaker">Shake It Up</RBS.Nav.Link>
            <RBS.Nav.Link as={Link} to="/contact">contact</RBS.Nav.Link>
            <RBS.Nav.Link as={Link} to="/viewthemes">themes</RBS.Nav.Link> 
            <RBS.Nav.Link as={Link} to="/profile">profile</RBS.Nav.Link>  
            <RBS.Nav.Link onClick={() => logout({  returnTo: window.location.origin })}>logout</RBS.Nav.Link>           
          </RBS.Nav>
      </RBS.Navbar.Collapse>
    </RBS.Navbar>
    ):(
      <RBS.Navbar className="navStyle" bg="transparent" expand="lg">
      <img className="imgNav" src={logo}  alt="Shaker Mason Jar"/>
      <RBS.Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <RBS.Navbar.Collapse id="basic-navbar-nav"
>
        <RBS.Nav className="mr-auto">
          <RBS.Nav.Link as={Link} to="/shaker">Shake It Up</RBS.Nav.Link>
            <RBS.Nav.Link as={Link} to="/contact">contact</RBS.Nav.Link>
            <RBS.Nav.Link as={Link} to="/viewthemes">themes</RBS.Nav.Link> 
            {/* <RBS.Nav.Link as={Link} to="/profile">profile</RBS.Nav.Link> */}
            <RBS.Nav.Link onClick={() => loginWithRedirect({returnTo: "http://localhost:3000/shaker"})}>login</RBS.Nav.Link>  
          </RBS.Nav>
      </RBS.Navbar.Collapse>
    </RBS.Navbar>

    )}
    
    </>
    
  )
};

export default Nav;

