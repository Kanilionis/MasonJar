
import React, { useState, useEffect } from "react";
// import { Redirect } from 'react-router-dom';
// import * as ReactBootStrap from "react-bootstrap";
import logo from "../images/logo.svg";
import "../index.css";
import Nav from '../components/Nav.js';

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import * as ReactBootStrap from "react-bootstrap";
import shaker from "./30644-200.png";

import Typical from 'react-typical';
import LoginButton from '../components/LoginButton';



const Enter = () => {
  const [wobble, setWobble] = React.useState(0)
  const animation = () => {
    setWobble(1);
  }
  return (
    <>
      <div className="enter-container">
        <div className="split left">
          <Nav />
          <div className="centered">
            <img src={logo} alt="shaker" height="300px" onMouseOver={animation} wobble={wobble} className="shake" onAnimationEnd={() => setWobble(0)} />
            <h1>Welcome to Shake It</h1>
            <p>new ideas, no decisions</p>
            {/* <div>
              <Button className="enterBtn" variant="outline-secondary" href="/shaker">ENTER</Button>
            </div> */}
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <h2>SHAKE IT UP</h2>
            <p>new ideas, no decisions</p>
            <Typical
              steps={['What should we do?', 1000,
                'How about a movie?', 500,
                'Maybe a dinner date?', 500]}
              loop={Infinity}
              wrapper="p"
            />
            <div>
              <LoginButton />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Enter;