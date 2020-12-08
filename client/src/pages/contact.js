import React from 'react';
import axios from 'axios';
import Nav from "../components/Nav";
import "../index.css"
import Footer from '../components/Footer'
import developers from "../developers.json";
import DeveloperCard from "../components/DeveloperCard";


class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      developers: developers,
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "/send",
      proxy: {
        protocol: 'https',
        host: '127.0.0.1',
        port: 3001,
      },
      data: this.state
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm() {
    this.setState({ name: ``, email: ``, message: `` })
  }

  render() {
    return (
      <>

        <div className="container-contact">

          <Nav />
          
          <div className="row suggestion-row">
            <div className="container col-12 col-md-5 home-container form-container-backdrop">
                <h1 className="h1-contact">Meet the Team!</h1>
                {this.state.developers.map(developer => (
                  <DeveloperCard {...developer} />
                ))}
            </div>

            <div className="container col-12 col-md-5 home-container contactSection">
              <div className="form-container-backdrop">
                <h1 className="h1-contact">Contact Us</h1>
                <p className="p-contact">Didn't see something you like? Make a suggestion to the Shaker Team!</p>
                <div className="App">
                  <form id="contact-form"  method="POST">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Suggestion</label>
                      <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                      <svg className="contact-btn" onSubmit={this.handleSubmit.bind(this)} height="150px" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.08 373.45"><defs></defs><path d="M214.68,385.93c6.72,0,13.33.19,19.93-.12a8.13,8.13,0,0,0,5.33-2.56c29.53-35.86,88.6-35.83,118.22.06a8.24,8.24,0,0,0,5.34,2.51c5.63.32,11.28.11,17.68.11v56c-5.45,0-11.54-.19-17.6.12a8.25,8.25,0,0,0-5.44,2.46c-16.5,20-38.23,27.61-63.35,26.52-22.14-1-41-9.23-55.19-26.89-1-1.28-3.34-2-5.09-2.11-6.47-.25-13-.1-19.83-.1Z" transform="translate(-181.79 -224.01)"/><rect className="cls-2" x="16" y="160.88" width="200.2" height="57.05"/><text  id="login-jar" x="50%" y="53%" textAnchor="middle" fill="white">submit</text></svg>
                    </div>
                    {/* <button type="submit" className="btn btn-primary button-contact-form"> */}
                      
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
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