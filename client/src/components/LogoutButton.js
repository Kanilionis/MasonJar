import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import Button from 'react-bootstrap/Button';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button className="enterBtn" variant="outline-secondary" 
    onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Button>
  );
};

export default LogoutButton;