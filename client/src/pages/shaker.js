import React, { useState, useEffect } from "react"
import API from "../utils/API"
import "../index.css"
import ShakerAnim from "../components/ShakerAnim"
import Nav from "../components/Nav";
import ModalShow from "../components/Modal";
import { Carousel } from "react-bootstrap";


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
    setShakers(res.data)
    console.log(res)
  }).catch(err => console.log(err))
}


function chooseTheme(){
  
  let timer1 = setTimeout(() => setModalOpen({isOpen: true}), 1000)
  return () => {
    clearTimeout(timer1)
  }
}

function closeModal(){
  setModalOpen({isOpen: false})
}

return(
  <>
  <Nav />
<center>
  {shakers.length ? (
     <Carousel controls={true} slide={true} indicators={false} >
     {shakers.map(shaker => (
       <Carousel.Item >
       <ShakerAnim chooseTheme={chooseTheme}/>{shaker.theme}
       <ModalShow isOpen={modalOpen.isOpen} closeModal={closeModal} data={shaker}/>
     </Carousel.Item>
     ))}
      </Carousel>
  ) : (
    <h3>nothing to see here</h3>
  )}
  </center>
  </>
)
}

export default Shaker

