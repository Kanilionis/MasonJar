import React from "react";
import "../../index.css"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <>
        <h2 className="h2-text">Contact Us</h2>
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/f/xwkwrzwq"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input className="form-control" id="name" type="text" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email:</label>
              <input className="form-control" id="email" type="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea className="form-control" id="message" type="text" name="message" />
            </div>
            <div className="form-group">
              {status === "SUCCESS" ? <p>Thanks!</p> : <button className="contactBtn">Submit</button>}
              {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </div>
          </form>
      </>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
  // <svg  className="submit-btn" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" height="50"
  //       viewBox="0 0 53.608 30.729" enableBackground="new 0 0 53.608 30.729" space="preserve">
  //       <path d="M3.931,7.915c1.799,0,3.569,0.051,5.336-0.032c0.545-0.041,1.055-0.286,1.427-0.686c7.908-9.602,23.725-9.594,31.657,0.016
  //       c0.377,0.393,0.887,0.632,1.43,0.672c1.508,0.085,3.021,0.029,4.734,0.029V22.91c-1.459,0-3.09-0.051-4.713,0.031
  //       c-0.551,0.031-1.07,0.266-1.457,0.659c-4.418,5.355-10.236,7.394-16.963,7.102c-5.928-0.269-10.979-2.472-14.778-7.2
  //       c-0.268-0.344-0.895-0.536-1.363-0.565c-1.733-0.067-3.481-0.026-5.31-0.026V7.915z"/>
  //       <rect y="7.636" width="53.608" height="15.276"/><text fontSize="10px" id="login-jar" x="50%" y="56%" textAnchor="middle" fill="white">submit</text>
  //       </svg>
}