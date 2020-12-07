
import React, {useEffect} from "react";



import { useAuth0 } from "../react-auth0-spa";

//this destructures useAuth0 into useable variables
const Profile = (props) => {
  const { user } = useAuth0();
//   const { name, picture, email } = user;
    useEffect(() =>{
        console.log(user)
    })

    
  

  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={props.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{props.name}</h2>
          <p className="lead text-muted">{props.email}</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Profile;