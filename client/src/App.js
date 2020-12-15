  
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Shaker from "./pages/shaker";
import Contact from "./pages/contact";
import Enter from "./pages/enter";
import View from './pages/viewthemes';
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./pages/profile"


const App = () => {

  const { isAuthenticated } = useAuth0();

  return (
    <>
    <Router> 
      <div>
        { isAuthenticated }
      </div>
      <div id="app" className="d-flex flex-column h-100">
        <Switch>
          <Route exact path= {["/","/enter"]} component={Enter} />
          <Route exact path="/shaker" component={Shaker} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/viewthemes" component={View} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
    </>
    
  );
}
  
export default App;
