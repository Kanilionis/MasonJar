import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import Button from 'react-bootstrap/Button';
import logo from "../images/New_Jar.svg";
import AuthRedirect from "./AuthRedirect"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  
  return(
      <>
      {/* <svg onClick={() => loginWithRedirect()} className="enter-btn login-btn" height="250px" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.08 373.45"><defs></defs><path d="M214.68,385.93c6.72,0,13.33.19,19.93-.12a8.13,8.13,0,0,0,5.33-2.56c29.53-35.86,88.6-35.83,118.22.06a8.24,8.24,0,0,0,5.34,2.51c5.63.32,11.28.11,17.68.11v56c-5.45,0-11.54-.19-17.6.12a8.25,8.25,0,0,0-5.44,2.46c-16.5,20-38.23,27.61-63.35,26.52-22.14-1-41-9.23-55.19-26.89-1-1.28-3.34-2-5.09-2.11-6.47-.25-13-.1-19.83-.1Z" transform="translate(-181.79 -224.01)"/><rect className="cls-2" x="16" y="160.88" width="200.2" height="57.05"/><text  id="login-jar" x="50%" y="54%" textAnchor="middle" fill="white">LOG IN</text></svg>
       */}
      
      <svg onClick={() => loginWithRedirect()} className="enter-btn login-btn" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="200.2" height="57.05" viewBox="0 0 53.608 30.729" enableBackground="new 0 0 53.608 30.729" space="preserve">
<path d="M3.931,7.915c1.799,0,3.569,0.051,5.336-0.032c0.545-0.041,1.055-0.286,1.427-0.686c7.908-9.602,23.725-9.594,31.657,0.016
	c0.377,0.393,0.887,0.632,1.43,0.672c1.508,0.085,3.021,0.029,4.734,0.029V22.91c-1.459,0-3.09-0.051-4.713,0.031
	c-0.551,0.031-1.07,0.266-1.457,0.659c-4.418,5.355-10.236,7.394-16.963,7.102c-5.928-0.269-10.979-2.472-14.778-7.2
	c-0.268-0.344-0.895-0.536-1.363-0.565c-1.733-0.067-3.481-0.026-5.31-0.026V7.915z"/>
  <rect y="7.636" width="53.608" height="15.276"/><text  id="login-jar" x="50%" y="54%" textAnchor="middle" fill="white">LOG IN</text>
  </svg>
    </>
  )
};

export default LoginButton;