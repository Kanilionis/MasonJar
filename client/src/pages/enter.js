import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";
import LoginButton from '../components/LoginButton';
import GuestButton from '../components/GuestButton.js';
import Logo from "../components/Logo"
import Nav from "../components/Nav";
import { useAuth0 } from "@auth0/auth0-react";
import TextEnterPage from "../components/TextEnterPage"

const Enter = () => {
  const { isAuthenticated } = useAuth0();
 
  return (
    <>
      <div className="enter-container">
        <div className="split left">
        {isAuthenticated ? (
             <div>
               <Nav/>
             </div>
             ): (
               <>
               </>
               )}
          <div className="centered">
            <Logo />
            <p className="enterText">new ideas...no decisions</p>
          </div>
        </div>
        <div className="split right">
          <div className="centered-right">
            <h2 className="enterShakeText">SHAKE IT UP</h2>
              <TextEnterPage />
              <div className="row">
              <div className="col-md-12">
                <LoginButton />
              </div>
              <div className="col-md-12">
                <GuestButton />
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  )
}
export default Enter;