import React from "react";
import "../index.css";
import Typical from 'react-typical';
import EnterButton from '../components/EnterButton';
import LoginButton from '../components/LoginButton';
import GuestButton from '../components/GuestButton.js';
import Logo from "../components/Logo"
import Nav from "../components/Nav";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../components/LogoutButton";


const Enter = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <div className="enter-container">
        <div className="split left">

        {/* {isAuthenticated ? (
             <div>
               <Nav/>
             </div>
             ): (
               
               <>
               </>
 
               )} */}
        
          <div className="centered">
            <Logo />
            <p className="enterText">new ideas...no decisions</p>
          </div>
        </div>
        <div className="split right">
          <div className="centered-right">
            <h2>SHAKE IT UP</h2>
            <Typical className=""
              steps={['What should we do?', 300,
                'How about a movie?', 300,
                'Maybe a dinner date?', 300]}
              loop={Infinity}
              wrapper="p"
            />

            {/* {isAuthenticated ? (
             
            <div className="row">
            <div className="col-md-3">
              <EnterButton />
            
            </div>
            <div className="col-md-6">
            </div>
            <div className="col-md-3">
              <LogoutButton />
            </div>
            </div>
          
            ): ( */}
              
              <div className="row">
              <div className="col-md-3">
                <LoginButton />
                
              </div>
              <div className="col-md-6">
              </div>
              <div className="col-md-3">
                <GuestButton />
              </div>
              <div className="col-md-4"></div>
            </div>

              {/* )} */}

            <div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  )
}
export default Enter;