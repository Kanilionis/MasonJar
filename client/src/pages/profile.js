import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import Nav from "../components/Nav";
import Footer from "../components/Footer/index.js";
import "../index.css";
//this destructures useAuth0 into useable variables
const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;
  return (
    <div>
      <Nav/>
      <div className="profile-container">
        <div className="profile-title col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2 className="user-name">{name}</h2>
            <br></br>
            <p className="user-info ">Email: {email}</p> 
            <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default Profile;