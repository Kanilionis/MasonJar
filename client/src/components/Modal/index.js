import React from 'react';
import {Modal, Button} from 'react-bootstrap'


const ModalShow = (props) => {


  return (
    <>
      <Modal show={props.isOpen} >
        <Modal.Header closeButton onClick={props.closeModal}>
          <Modal.Title>{props.currentShaker.theme}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.currentShaker.currentActivity}</Modal.Body>
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
