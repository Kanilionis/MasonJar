import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Shaker from "./pages/shaker";
import Contact from "./pages/contact";
// import Nav from "./components/Nav";
// import Enter from "./pages/enter";
import View from './pages/viewthemes';
import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import { useAuth0 } from "./react-auth0-spa";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

    // function App() {
  return (
    <>
    <Router>
<div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/shaker" exact component={Shaker} />
          <Route path="/contact" component={Contact} />
          <Route path="/viewthemes" component={View} />
        </Switch>
      </div>
      {/* <Footer /> */}
    </div>
    </Router>
    </>
  );
}

export default App;


// {/* <Router>
//       <div>
//         <Switch>
//         <Route exact path="/">
//             <Enter />
//           </Route>
//           <Route exact path="/shaker">
//             <Shaker />
//           </Route>
//           <Route exact path="/contact">
//             <Contact/>
//           </Route>
//           <Route exact path="/viewthemes">
//            <View/>
//           </Route>
//         </Switch>
//       </div>
//     </Router> */}
