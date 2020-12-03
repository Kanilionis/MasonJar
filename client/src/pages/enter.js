import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";
import shaker from "./30644-200.png";

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
            <h1>Welcome to Shake It</h1>
            <div className="img-container">
                <img src={shaker} alt="shaker"/>
            </div>

            <div>
                {this.renderRedirect()}
                <ReactBootStrap.Button onClick={this.setRedirect} variant="primary" size="lg">
                    Your Next Adventure Awaits...
                </ReactBootStrap.Button>
            </div>
       </>
    )
  }
};

export default Enter;