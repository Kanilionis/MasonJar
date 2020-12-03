import React from 'react';
import {Modal, Button} from 'react-bootstrap'


function ModalShow(props) {
  
  return (
    <>
      <Modal show={props.isOpen} >
        <Modal.Header closeButton onClick={props.closeModal}>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Eh...Try Again
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ModalShow; 
