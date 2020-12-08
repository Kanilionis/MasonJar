import React, { useState, useEffect } from "react"
import API from "../utils/API"
import "../index.css"
import ShakerAnim from "../components/ShakerAnim"
import Nav from "../components/Nav";
import ModalShow from "../components/Modal";
import { Carousel } from "react-bootstrap";
import ShakerTop from "../components/ShakerTop"
import ShakerBottom from "../components/ShakerBottom"
import Button from 'react-bootstrap/Button'

const Shaker = () => {


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


  useEffect(() => {
    loadThemes()
  }, [])

  useEffect(() => {

    if (currentShaker.theme) {
      let timer1 = setTimeout(() => setModalOpen({ isOpen: true }), 1000)
      return () => {
        clearTimeout(timer1)
      }
    }
  }, [currentShaker.theme])

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

  function pickAgain() {
    var theme = currentShaker.theme;
    API.getActivitiesByTheme(theme).then(res => {
      console.log(res.data)
      var randomPick = Math.floor(Math.random() * res.data[0].activities.length)
      setCurrentShaker({ ...currentShaker, currentActivity: res.data[0].activities[randomPick].name })
    }).catch(err => console.log(err))
  }

  function closeModal() {
    setModalOpen({ isOpen: false })
  }
  


return(
  <>

  <div className="contact-container">
    <Nav />
    <center> 
      <br></br>
      <ShakerTop />
     
      {shakers.length ? (
     <div className="container">
     <div className="row">
       <div className="col-md-4 customizeShaker">
       <h3>Customize Your Shaker</h3>
       <p>did you know what you can do?</p>
         <ul>
         <li>Create Custom Shakers</li>
             <li>Add New Activities</li>
             <li>Delete Activities</li>
             <li>Update Activities</li>

         </ul>
         
         <Button variant="outline-secondary" href="/viewthemes">Start Customizing</Button> 
       </div>
       <Carousel className="center carousel col-md-3" indicators={false} fade={true} >
        {shakers.map(shaker => (
          
          
          <Carousel.Item className="carousel-item" >
          <ShakerAnim chooseTheme={chooseTheme} theme={shaker.theme}/>
          
          <ModalShow pickAgain={pickAgain} isOpen={modalOpen.isOpen} closeModal={closeModal} currentShaker={currentShaker}/>
          </Carousel.Item>
       
        ))}
        </Carousel>

       <div className="col-md-4 contactShaker">
         <h3>See ways we can improve?</h3>
         <p>contact us to tell us more!</p>
         <Button variant="outline-secondary" href="/contact">Contact Us</Button>
       </div>
     </div>
   </div>
        
       
      ) : (
        <h3>nothing to see here</h3>
      )}
     
    </center>
  </div>

  </>
)
}

export default Shaker

