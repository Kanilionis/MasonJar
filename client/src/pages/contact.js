import React from 'react';
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
  render() {
    return (
      <>
        <div className="contact-container">
          <Nav />
          <div className="row suggestion-row">
            <div className="container col-12 col-md-5">
              <div className="form-container-backdrop">
                <MyForm />
              </div>
            </div>
            <div className="container col-12 col-md-5">
              <div className="form-container-backdrop">
                <h2 className="h2-text">Meet the Team!</h2>
                {this.state.developers.map(developer => (
                  <DeveloperCard {...developer} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
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