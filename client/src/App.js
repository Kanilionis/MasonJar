import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Shaker from "./pages/shaker";
import Contact from "./pages/contact";
import Nav from "./components/Nav";


function App() {
  return (
    <>
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/shakers">
            <Shaker />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
