import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import Button from 'react-bootstrap/Button';
import logo from "../images/New_Jar.svg";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return(
      <>
      
      
      <svg  className="login-btn" height="250px" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.08 373.45"><defs></defs><path d="M214.68,385.93c6.72,0,13.33.19,19.93-.12a8.13,8.13,0,0,0,5.33-2.56c29.53-35.86,88.6-35.83,118.22.06a8.24,8.24,0,0,0,5.34,2.51c5.63.32,11.28.11,17.68.11v56c-5.45,0-11.54-.19-17.6.12a8.25,8.25,0,0,0-5.44,2.46c-16.5,20-38.23,27.61-63.35,26.52-22.14-1-41-9.23-55.19-26.89-1-1.28-3.34-2-5.09-2.11-6.47-.25-13-.1-19.83-.1Z" transform="translate(-181.79 -224.01)"/><rect className="cls-2" x="16" y="160.88" width="200.2" height="57.05"/><text  id="login-jar" x="50%" y="54%" textAnchor="middle" fill="white">LOG IN</text></svg>
      
    
       
       {/* <Button className="enterBtn" variant="outline-secondary" onClick={() => loginWithRedirect()}>Log In</Button>  <img src={logo} height="auto" width="7%"/> */}
       
    </>
  )
};

export default LoginButton;