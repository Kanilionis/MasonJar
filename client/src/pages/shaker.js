// Import Things
import React, { useState, useEffect } from "react"
import API from "../utils/API"
import "../index.css"
import ShakerAnim from "../components/ShakerAnim"
import Nav from "../components/Nav";
import ModalShow from "../components/Modal";
import { Carousel } from "react-bootstrap";
import ShakerTop from "../components/ShakerTop"
import ShakerBottom from "../components/ShakerBottom"
import Footer from "../components/Footer"

const Shaker = () => {

  // Set State

  //Loads a single theme and its activities based on a click
  const [currentShaker, setCurrentShaker] = useState({
    theme: "",
    activities: [],
    currentActivity: ""
  })

  //Loads all themes and activities for shaker page
  const [shakers, setShakers] = useState({
    theme: "",
    activities: []
  })

  //Determines if the modal is showing
  const [modalOpen, setModalOpen] = useState({
    isOpen: false
  })

// Loads all shaker themes available on page load
  useEffect(() => {
    loadThemes()
  }, [])


// Opens the shaker modal
  useEffect(() => {

    if (currentShaker.theme) {
      let timer1 = setTimeout(() => setModalOpen({ isOpen: true }), 1000)
      return () => {
        clearTimeout(timer1)
      }
    }
  }, [currentShaker.theme])


  // Grabs all shakers
  const loadThemes = () => {
    API.getThemes().then(res => {
      setShakers(res.data)
    }).catch(err => console.log(err))
  }

  //This sets the state for the current shaker to populate the modal
  function chooseTheme(theme) {
    API.getActivitiesByTheme(theme).then(res => {
      console.log(res.data)
      var randomPick = Math.floor(Math.random() * res.data[0].activities.length)
      console.log(randomPick)
      setCurrentShaker({ theme: [theme], activities: res.data[0].activities, currentActivity: res.data[0].activities[randomPick].name })
    }).catch(err => console.log(err))
  }

  // Allows user to pick a new random item
  function pickAgain() {
    var theme = currentShaker.theme;
    API.getActivitiesByTheme(theme).then(res => {
      console.log(res.data)
      var randomPick = Math.floor(Math.random() * res.data[0].activities.length)
      setCurrentShaker({ ...currentShaker, currentActivity: res.data[0].activities[randomPick].name })
    }).catch(err => console.log(err))
  }

  // Closes the modal
  function closeModal() {
    setModalOpen({ isOpen: false })
  }
  
// Shaker Return
return(
  <>
  <div className="contact-container">
    <Nav />
    <center> 
      <ShakerTop />
      {shakers.length ? (
        <Carousel className="center carousel col-md-3-col-sm-8" indicators={true} fade={true} >
        {shakers.map(shaker => (
          <Carousel.Item className="carousel-item" >
            <ShakerAnim chooseTheme={chooseTheme} theme={shaker.theme}/>
            <ModalShow pickAgain={pickAgain} isOpen={modalOpen.isOpen} closeModal={closeModal} currentShaker={currentShaker}/>
          </Carousel.Item>
        ))}
        </Carousel>
      ) : (
        <h3>loading..</h3>
      )}
      <ShakerBottom />
    </center>
  </div>
  <Footer />
  </>
)
}

export default Shaker