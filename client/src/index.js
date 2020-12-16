import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(

  <Auth0Provider
    domain="shake-it-up.us.auth0.com"
    clientId="bq49w0Ndw7tgpIOozzG8Xn4N0CROymnq"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,

  document.getElementById("root") 

);













