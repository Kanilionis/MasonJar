import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import Button from 'react-bootstrap/Button';

const LoginButton = () => {
  const { loginWithRedirect, logout } = useAuth0();

  return(
      <>
       <Button className="enterBtn" variant="outline-secondary" onClick={() => loginWithRedirect()}>Log In</Button>
       <Button className="enterBtn" variant="outline-secondary" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</Button>
    </>
  )
};

export default LoginButton;