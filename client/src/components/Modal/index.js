import React from 'react';
import {Modal} from 'react-bootstrap'
import jar from "../30644-200.png"


const ModalShow = (props) => {
  const [wobble, setWobble] = React.useState(0)
  function handleClick(){
    setWobble(1);
    props.pickAgain(props.theme)
    
  }
  return (
    <>
      <Modal show={props.isOpen} >
        <Modal.Header closeButton onClick={props.closeModal}>
          <Modal.Title>{props.currentShaker.theme}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.currentShaker.currentActivity}</Modal.Body>
        <Modal.Footer>
          <img height="40px" src={jar} className="pick-again" variant="secondary" alt="jar" onClick={handleClick} onAnimationEnd={() => setWobble(0)} wobble={wobble} >
          </img>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalShow; 
