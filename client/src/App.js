import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Shaker from "./pages/shaker";
import Contact from "./pages/contact";
import Enter from "./pages/enter";
import View from './pages/viewthemes';
import Loading from "./components/Loading";
import Footer from "./components/Footer/index";
import { useAuth0 } from "./react-auth0-spa";

const App = () => {

  const { isAuthenticated } = useAuth0();

  return (
    <div className="container">
      {isAuthenticated ? (
         <Router>
         <div id="app" className="d-flex flex-column h-100">
          <div className="container flex-grow-1">
            <Switch>
              <Route exact path="/">
                <Enter/>
              </Route>
              <Route exact path="/shaker" >
                <Shaker/>
              </Route>
              <Route exact path="/contact">
                <Contact/>
              </Route>
              <Route exact path="/viewthemes">
                <View/>
              </Route>
            </Switch>
          </div>
          </div>
        </Router>

      ): (
        <Enter/>
      )}
      

    </div>
 


  );
}

export default App;



