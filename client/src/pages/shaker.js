import React, { useState, useEffect } from "react"
// import API from "../utils/API"
// import DateNightIn from "../components/DateNightIn"
// import DateNightOut from "../components/DateNightOut"
// import NetflixandChill from "../components/NetflixandChill"
// import Outdoor from "../components/Outdoor"
// import Weekend from "../components/Weekend"
import "../index.css"
import ShakerAnim from "../components/ShakerAnim"
import Nav from "../components/Nav";
import ModalShow from "../components/Modal";
// import Modal from "../components/Modal"
// import { Link } from "react-router-dom"
import { Carousel } from "react-bootstrap";
import ShakerImg from "./30644-200.png";
import API from "../utils/API";

const Shaker = () => {

const [shakers, setShakers] = useState({  
  theme: "",
  activities: [],
  currentActivity: ""
})

const [modalOpen, setModalOpen] = useState({
  isOpen: false
})

useEffect(() => {
  loadThemes()
}, [])

const loadThemes = () => {
  API.getThemes().then(res => {
    console.log(res)
  }).catch(err => console.log(err))
}


function chooseTheme(){
  
  let timer1 = setTimeout(() => setModalOpen({isOpen: true}), 1000)
  return () => {
    clearTimeout(timer1)
  }
  // console.log("chosen shaker")
  // setModalOpen({isOpen: true})
}

function closeModal(){
  setModalOpen({isOpen: false})
}

return(
  <>
  <Nav />
  
  {/* <div className="container-fluid">
    <div className="row">
    <div className="col-2">
    
    {shakers.activity.map(activity => (
      <span key={activity} >
      <ShakerAnim chooseTheme={chooseTheme}/>
      </span>

    ))}


    </div>
    <ModalShow isOpen={modalOpen.isOpen} closeModal={closeModal}/>
    </div>
  </div> */}

<center>
  <Carousel controls={true} slide={true} indicators={false} >
    
    <Carousel.Item >
      <ShakerAnim chooseTheme={chooseTheme}/>Date Night In
      <ModalShow isOpen={modalOpen.isOpen} closeModal={closeModal} data={shakers}/>
    </Carousel.Item>
    <Carousel.Item>
      <ShakerAnim chooseTheme={chooseTheme}/>Date Night Out
      <ModalShow isOpen={modalOpen.isOpen} closeModal={closeModal} data={shakers}/>
    </Carousel.Item>
    <Carousel.Item>
      <ShakerAnim chooseTheme={chooseTheme}/>Netflix and Chill
      <ModalShow isOpen={modalOpen.isOpen} closeModal={closeModal} data={shakers}/>
    </Carousel.Item>
    <Carousel.Item>
      <ShakerAnim chooseTheme={chooseTheme}/>Get Outside
      <ModalShow isOpen={modalOpen.isOpen} closeModal={closeModal} data={shakers}/>
    </Carousel.Item>
    <Carousel.Item>
      <ShakerAnim chooseTheme={chooseTheme}/>Weekend Getaway
      <ModalShow isOpen={modalOpen.isOpen} closeModal={closeModal} data={shakers}/>
    </Carousel.Item>
   
  </Carousel>
  </center>
  </>
)
}

export default Shaker

