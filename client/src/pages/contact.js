import React from 'react';
import axios from 'axios';
import Nav from "../components/Nav";
import "../index.css"
import Footer from '../components/Footer'
import developers from "../developers.json";
import DeveloperCard from "../components/DeveloperCard";
import MyForm from "../components/ContactForm/MyForm"

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     
      developers: developers,
    }
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   axios({
  //     method: "POST",
  //     url: "https://localhost:3001/send",
  //     data: this.state
  //   }).then((response) => {
  //     if (response.data.status === 'success') {
  //       alert("Message Sent.");
  //       this.resetForm()
  //     } else if (response.data.status === 'fail') {
  //       alert("Message failed to send.")
  //     }
  //   })
  // }

  // resetForm() {
  //   this.setState({ name: ``, email: ``, message: `` })
  // }

  render() {
    return (
      <>
    
        <div className="contact-container">

          <Nav />
          <div className="row suggestion-row">
          <div className="container col-12 col-md-5 home-container contactSection">
              <div className="form-container-backdrop">
          <MyForm/>
          </div>
          </div>
          {/* <div className="row suggestion-row">
            

            <div className="container col-12 col-md-5 home-container contactSection">
              <div className="form-container-backdrop">
                <h1 className="h1-contact">Contact Us</h1>
                
                <div className="App">
                  <form   method="POST">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea className="form-control" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                      
                      <svg className="submit-btn" onSubmit={this.handleSubmit.bind(this)} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" height="50"
                      viewBox="0 0 53.608 30.729" enableBackground="new 0 0 53.608 30.729" space="preserve">
                      <path d="M3.931,7.915c1.799,0,3.569,0.051,5.336-0.032c0.545-0.041,1.055-0.286,1.427-0.686c7.908-9.602,23.725-9.594,31.657,0.016
                      c0.377,0.393,0.887,0.632,1.43,0.672c1.508,0.085,3.021,0.029,4.734,0.029V22.91c-1.459,0-3.09-0.051-4.713,0.031
                      c-0.551,0.031-1.07,0.266-1.457,0.659c-4.418,5.355-10.236,7.394-16.963,7.102c-5.928-0.269-10.979-2.472-14.778-7.2
                      c-0.268-0.344-0.895-0.536-1.363-0.565c-1.733-0.067-3.481-0.026-5.31-0.026V7.915z"/>
                      <rect y="7.636" width="53.608" height="15.276"/><text fontSize="10px" id="login-jar" x="50%" y="56%" textAnchor="middle" fill="white">submit</text>
                      </svg>
                    </div>
                    
                      
                  </form>
                </div>
              </div>
            </div> */}
            </div>
             
            <div className="container col-12 col-md-5 home-container form-container-backdrop">
                <h1 className="h1-contact">Meet the Team!</h1>
                {this.state.developers.map(developer => (
                  <DeveloperCard {...developer} />
                ))}
            </div>
            </div>
          
       
        <Footer/>
      </>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }
}

export default Contact;