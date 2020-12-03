import React, { useState, useEffect } from "react"
import API from "../utils/API"
// import DateNightIn from "../components/DateNightIn"
// import DateNightOut from "../components/DateNightOut"
// import NetflixandChill from "../components/NetflixandChill"
// import Outdoor from "../components/Outdoor"
// import Weekend from "../components/Weekend"

import "../index.css"
import ShakerAnim from "../components/ShakerAnim"
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

// function chooseShaker(e){
//   console.log("chosen shaker")
// e.preventDefault();

// }

return(
  <>
  <div className="container-fluid">
    <div className="row">
    <div className="col-2">
    {shakers.map(shaker => (
      <span key={shaker.id}> 
      <ShakerAnim/>
      </span>
    ))}
  
 
    </div>
    {/* <div className="col-2">
    <span><img className="shake" alt={shakers.theme} src={shaker} onClick={chooseShaker}/>
    <DateNightOut/>
    </span>
    </div>
    <div className="col-2">
    <span><img className="shake" alt={shakers.theme} src={shaker} onClick={chooseShaker}/>
    <NetflixandChill/>
    </span>
    </div>
    <div className="col-2">
    <span><img className="shake" alt={shakers.theme} src={shaker} onClick={chooseShaker}/>
    <Outdoor/>
    </span>
    </div>
    <div className="col-2">
    <span><img className="shake" alt={shakers.theme} src={shaker} onClick={chooseShaker}/>
    <Weekend/>
    </span>
    </div> */}
    </div>
  </div>
  </>
)
}

export default Shaker