import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap'


function ModalShow() {
  const [show, setShow] = useState(false);

  setTimeout(() => {
  
  },4000);


  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    setTimeout(true);
  }

   
   
  

  return (
    <>
      <button variant="primary" onClick={handleShow}>
        Launch demo modal
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ModalShow; 
