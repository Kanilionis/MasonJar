import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import Button from 'react-bootstrap/Button';
import logo from "../images/New_Jar.svg";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return(
      <>
       <Button className="enterBtn" variant="outline-secondary" onClick={() => loginWithRedirect()}>Log In / Sign Up</Button>  
       {/* <img src={logo} height="auto" width="7%"/> */}
       
    </>
  )
};

export default LoginButton;