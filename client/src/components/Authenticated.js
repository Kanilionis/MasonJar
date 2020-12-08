import React from "react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

import { useAuth0 } from "../react-auth0-spa";

const Authenticated = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <div/>;
};

export default Authenticated;