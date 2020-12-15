import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Nav from "../components/Nav";
import "../index.css";

//this destructures useAuth0 into useable variables
const Profile = () => {

  const { user,  isAuthenticated } = useAuth0();
  const { name, picture, email, nickname } = user;

  return (
    <>
   {isAuthenticated ? (
     <>
       <div>
          <Nav/>
          <div className="test">
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
                  <p className="user-info">Username: {nickname}</p>
              </div>
            </div>
          </div>
        </div>
        </>
    ) : (
        
      <>
      <p>Not logged in...</p>
      </>

    )}
     
    </>
    
  )
};

export default Profile;
