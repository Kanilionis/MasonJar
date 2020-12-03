import React from 'react'
import shaker from "../pages/30644-200.png"
import ModalShow from "../components/Modal/index"
import "../index.css"


const ShakerAnim = (props) => {
  const [wobble, setWobble] = React.useState(0)
  function handleClick(){
    setWobble(1);
    props.chooseTheme()
  }
  return (
    <>
    <img
      className="shake"
      src={shaker}
      alt="jar"
      onClick={() => handleClick() }
      onAnimationEnd={() => setWobble(0)}
      wobble={wobble}
    />
    <ModalShow/>
    </>
  )
}
export default ShakerAnim