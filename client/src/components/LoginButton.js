import React from "react";
import { useAuth0 } from "../react-auth0-spa";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return(
      <>
       <button onClick={() => loginWithRedirect()}>Log In</button>
       {/* <button onClick={() => logout({ returnTo: window.location.origin })}>
       Log Out
     </button> */}
    </>
  )
};

export default LoginButton;