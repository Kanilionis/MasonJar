import React from "react";
import logo from "../images/NewFavicon.svg";
import "../index.css";
import Typical from 'react-typical';
import LoginButton from '../components/LoginButton';
import GuestButton from '../components/GuestButton.js';


const Enter = () => {

  return (
    <>
      <div className="enter-container">
        <div className="split left">
          {/* <Nav /> */}
          <div className="centered">
            <img src={logo} alt="shaker" height="300px" />
            <h1>Welcome To Shake It Up </h1>
            <p className="enterText">new ideas, no decisions.</p>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <h2>SHAKE IT UP</h2>
            <p className="">new ideas, no decisions.</p>
            <Typical className=""
              steps={['What should we do?', 1000,
                'How about a movie?', 500,
                'Maybe a dinner date?', 500]}
              loop={Infinity}
              wrapper="p"
            />
            <div>
              <LoginButton className="enter-buttons" /> <br/>
              <GuestButton className="enter-buttons"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Enter;