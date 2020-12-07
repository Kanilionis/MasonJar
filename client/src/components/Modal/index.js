import React from 'react';
import { Modal, OverlayTrigger, Tooltip } from 'react-bootstrap'
import jar from "../30644-200.png"
import logo from "../../images/logo.svg"


const ModalShow = (props) => {
  const [wobble, setWobble] = React.useState(0)
  function handleClick(){
    setWobble(1);
    props.pickAgain(props.theme)
    
  }
  return (
    <>
      <Modal show={props.isOpen} >
        <Modal.Header className="modal-header" closeButton onClick={props.closeModal}>
          <Modal.Title className="modal-title">{props.currentShaker.theme}</Modal.Title>
        </Modal.Header>
          <div className="img-card">
            <img height="200px" src={logo} className="modal-image" alt={props.theme}></img>
          </div>
        <Modal.Body className="modal-activity">{props.currentShaker.currentActivity}</Modal.Body>
        
        <Modal.Footer>
        <OverlayTrigger 
          placement="left"
          overlay={<Tooltip id="tooltip-disabled">Not Your Thing...Shake Again!</Tooltip>}
        >
          <span className="d-inline-block">
            <img height="50px" src={logo} className="pick-again" variant="secondary" alt="jar" onClick={handleClick} onAnimationEnd={() => setWobble(0)} wobble={wobble} ></img>
          </span>
        </OverlayTrigger>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalShow; 
