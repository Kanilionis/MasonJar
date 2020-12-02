import React, { useState, useEffect } from "react"
import API from "../utils/API"
import DateNightIn from "../components/DateNightIn"
import DateNightOut from "../components/DateNightOut"
import NetflixandChill from "../components/NetflixandChill"
import Outdoor from "../components/Outdoor"
import Weekend from "../components/Weekend"
import shaker from "./30644-200.png"
// import { Link } from "react-router-dom"


function Shaker(){

const [shakers, setShakers] = useState([])

useEffect(() => {
  loadShakers()
}, [])

function loadShakers(){
  console.log("loading shaker")
  API.getShakers().then(res => setShakers(res.data)).catch(err => console.log(err))
}

function chooseShaker(e){
  console.log("chosen shaker")
e.preventDefault();

}

return(
  <>
  <div className="container-fluid">
    <div className="row">
    <div className="col-2">
    <span><img src={shaker} onClick={chooseShaker}/>
     <DateNightIn/>
    </span>
    </div>
    <div className="col-2">
    <span><img src={shaker} onClick={chooseShaker}/>
    <DateNightOut/>
    </span>
    </div>
    <div className="col-2">
    <span><img src={shaker} onClick={chooseShaker}/>
    <NetflixandChill/>
    </span>
    </div>
    <div className="col-2">
    <span><img src={shaker} onClick={chooseShaker}/>
    <Outdoor/>
    </span>
    </div>
    <div className="col-2">
    <span><img src={shaker} onClick={chooseShaker}/>
    <Weekend/>
    </span>
    </div>
    </div>
  </div>
  </>
)
}

export default Shaker