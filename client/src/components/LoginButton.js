import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import Button from 'react-bootstrap/Button';

const LoginButton = () => {
  const { loginWithRedirect , logout} = useAuth0();

  return(
      <>
       <Button className="enterBtn" variant="outline-secondary" onClick={() => loginWithRedirect()}>Log In</Button>
       
    </>
  )
};

export default LoginButton;