import React from "react";
import { Link } from "react-router-dom";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

import { useAuth0 } from "../react-auth0-spa";

const AuthRedirect = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? 
  //  <Link to={"/shaker"}/> : <Link to={"/enter"} />;
  <Link to={"/shaker"} />: <LogoutButton />
};

export default AuthRedirect;