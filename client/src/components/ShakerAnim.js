import React from 'react'
import shaker from "../images/Whole_Mason2.svg"
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
      height="300px"
      className="shake"
      src={shaker}
      alt="jar"
      onClick={() => handleClick() }
      onAnimationEnd={() => setWobble(0)}
      wobble={wobble}
    />
    <ModalShow className="modal"/>
    </>
  )
}
export default ShakerAnim