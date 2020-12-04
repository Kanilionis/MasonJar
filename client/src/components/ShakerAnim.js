import React from 'react'
import shaker from "../images/New_Jar.svg"
import "../index.css"


const ShakerAnim = (props) => {
  const [wobble, setWobble] = React.useState(0)
  function handleClick(){
    setWobble(1);
    props.chooseTheme(props.theme)
  }
  return (
    <>
    <img
      height="300px"
      className="shake"
      src={shaker}
      alt="jar"
      onClick={() => handleClick() }
      onAnimationEnd={() => setWobble(0)}
      wobble={wobble}
    />
    <h3>{props.theme}</h3>
    </>
  )
}
export default ShakerAnim