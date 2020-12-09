  
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Shaker from "./pages/shaker";
import Contact from "./pages/contact";
import Enter from "./pages/enter";
import View from './pages/viewthemes';
import Loading from "./components/Loading";
import { useAuth0 } from "./react-auth0-spa";
import Profile from "./pages/profile"

const App = () => {

  return (
    <>
        <Router>
        <div id="app" className="d-flex flex-column h-100">
            <Switch>
              <Route exact path= {["/","/home"]} component={Enter} />
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
