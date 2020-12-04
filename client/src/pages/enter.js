import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";
import shaker from "./30644-200.png";
import "../index.css"
import Nav from '../components/Nav.js'
import Typical from 'react-typical';
import LoginButton from '../components/Login'




class Enter extends Component {

  state = {
    redirect: false,
  }

  setRedirect = () => {
    this.setState({
      redirect: true,
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/shaker'/>
    }
  }

  render () {
    return (
        <>
        
        <div className ="enter-container">
         
          <div class="split left">
          <Nav/>
              <div class="centered">
                <img src={shaker} alt="shaker" className="centered-img"/>
                   <h1>Welcome to Shake It</h1>
                    <h2>Jane Flex</h2>
                      <p>Some text.</p>
                      <div>
                    {this.renderRedirect()}
                      <LoginButton></LoginButton>
                      
                  </div>
                </div>
          </div>

          <div class="split right">
              <div class="centered">
                  
                    <h2>SHAKE IT</h2>
                      <p>Some text here too.</p>
                      <Typical
                        steps={['What should we do?', 1000, 
                        'How about a movie?', 500, 
                        'Maybe a dinner date?', 500]}
                        loop={Infinity}
                        wrapper="p"
                      />
                  </div>
              
                  
              </div>
              
          </div>
       </>
    )
  }
};

export default Enter;