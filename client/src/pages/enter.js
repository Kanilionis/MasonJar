import React from "react";
import logo from "../images/NewFavicon.svg";
import { Link, useLocation } from "react-router-dom";
import "../index.css";
import Typical from 'react-typical';
import EnterButton from '../components/EnterButton';
import LoginButton from '../components/LoginButton';
import GuestButton from '../components/GuestButton.js';
import Logo from "../components/Logo"
// import GuestButton from '../components/GuestButton.js';
import Nav from "../components/Nav";
import { useAuth0 } from "../react-auth0-spa";
import LogoutButton from "../components/LogoutButton";
import TextEnterPage from "../components/TextEnterPage"




const Enter = () => {
  const { isAuthenticated } = useAuth0();
  const location = useLocation();
  // const { textArray, setTextArray} = useState([
  //   "What should we do?", "How about a movie?", "Maybe a dinner date?"
  // ])
 
  return (
    <>
      <div className="enter-container">
        <div className="split left">



        {isAuthenticated ? (
             <div>
               {/* <Link to="/shaker"className={location.pathname === "/shaker" ? "nav-link active" : "nav-link"}>
            </Link> */}
               <Nav/>
             </div>
             ): (
               
               <>
               </>
 
               )}
        

          <div className="centered">
            <Logo />
            {/* <img src={logo} alt="shaker" height="400px" /> */}
            {/* <h1>Welcome To Shake It Up! </h1> */}
            <p className="enterText">new ideas...no decisions</p>
          </div>
        </div>
        <div className="split right">
          <div className="centered-right">
            <h2 className="enterShakeText">SHAKE IT UP</h2>
            {/* <p className="">new ideas...no decisions</p> */}
              
              <TextEnterPage />
             
        
           
            {/* <Typical 
              steps={['What should we do?', 1000,
                'How about a movie?', 500,
                'Maybe a dinner date?', 500]}
              loop={Infinity}
              wrapper="p"
            /> */}

            {isAuthenticated ? (
             
            
            <div className="row">
            <div className="col-md-12">
              <EnterButton />
              
            </div>
            
            <div className="col-md-12">
              <LogoutButton />
            </div>
            </div>
            
            

            ): (
              
              <div className="row">
              <div className="col-md-12">
                <LoginButton />
                
              </div>
              
              <div className="col-md-12">
                <GuestButton />
              </div>
              
            </div>

              )}

            <div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Enter;