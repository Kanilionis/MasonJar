import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class Modal extends Component {
state = {
  modal: false
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

render() {
  return (
    <MDBContainer>
      <MDBBtn onClick={this.toggle}>Modal</MDBBtn>
      {/* Hide modal button after click event */}
      
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Activity</MDBModalHeader>
        
        
        <MDBModalBody>
          This will populate description from DB
        </MDBModalBody>
        
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle}>X</MDBBtn>
          <MDBBtn color="primary">Skip</MDBBtn>
          {/* Skip Function to generate new array and replace modal data */}
        </MDBModalFooter>
      </MDBModal>

    </MDBContainer>
    );
  }
}

export default Modal;
