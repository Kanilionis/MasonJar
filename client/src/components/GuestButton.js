import React from "react";
import Button from 'react-bootstrap/Button';
import logo from "../images/New_Jar.svg";

const GuestButton = () => {

  return(
      <>
       <Button className="enterBtn" variant="outline-secondary" href="/shaker">Enter As Guest</Button>  <img src={logo} height="auto" width="7%"/>
       
    </>
  )
};

export default GuestButton;