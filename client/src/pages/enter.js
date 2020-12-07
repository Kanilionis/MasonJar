import React from "react";
import logo from "../images/New_Jar.svg";
import "../index.css";
import Typical from 'react-typical';
import LoginButton from '../components/LoginButton';



const Enter = () => {
  const [wobble, setWobble] = React.useState(0)
  const animation = () => {
    setWobble(1);
  }
  return (
    <>
      <div className="enter-container">
        <div className="split left">
          {/* <Nav /> */}
          <div className="centered">
            <img src={logo} alt="shaker" height="300px" onMouseOver={animation} wobble={wobble} className="shake" onAnimationEnd={() => setWobble(0)} />
            <h1>Welcome To Shake It! </h1>
            <p className="enterText">new ideas, no decisions.</p>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <h2>SHAKE IT UP</h2>
            <p className="enterText">new ideas, no decisions.</p>
            <Typical className="infinityText"
              steps={['What should we do?', 1000,
                'How about a movie?', 500,
                'Maybe a dinner date?', 500]}
              loop={Infinity}
              wrapper="p"
            />
            <div>
              <LoginButton />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Enter;