import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Shaker from "./pages/shaker";

function App() {
  return (
    <>
    <Router>
    <Route exact path="/shakers" component={Shaker} />
    </Router>
    </>
  );
}

export default App;
