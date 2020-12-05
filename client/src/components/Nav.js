import React from "react";
import { Link } from "react-router-dom";
import * as RBS from "react-bootstrap";
import shaker from "./30644-200.png"
import AuthNav from "./AuthNav";


function Nav() {
  return (
    <>

    <RBS.Navbar bg="transparent" expand="lg">

      <img  src={shaker} alt="Shaker Mason Jar"height="auto" width="5%"/>

      <RBS.Navbar.Brand>
        <RBS.Nav.Link as={Link} to="/shaker">Shake It</RBS.Nav.Link> 
        
      </RBS.Navbar.Brand>

      <RBS.Navbar.Collapse id="basic-navbar-nav">
        <RBS.Nav className="mr-auto">
          <RBS.Nav>
            <RBS.Nav.Link as={Link} to="/contact">Contact</RBS.Nav.Link>
            <RBS.Nav.Link as={Link} to="/viewthemes">Themes</RBS.Nav.Link>         
          </RBS.Nav>
        </RBS.Nav>
      </RBS.Navbar.Collapse>

    </RBS.Navbar>

   
    </>
    

  )
};

export default Nav;

