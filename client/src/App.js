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

  const { isLoading } = useAuth0();

    if (isLoading) {
      return <Loading />;
    }
  

  const { isAuthenticated } = useAuth0();

  return (
    <div className="container">
      
      
        <div>
        {isAuthenticated === true ? (
          <Router>
          <div id="app" className="d-flex flex-column h-100">
            <div className="container flex-grow-1">
              <Switch>
                <Route exact path={["/shaker", "/"]} component={Shaker} />
                <Route path="/contact" component={Contact} />
                <Route path="/viewthemes" component={View} />
              </Switch>
            </div>
          </div>
          </Router>

        ): (
          <Enter />
        )
        }
        </div>
    </div>
  );
  }
  

export default App;



