import React from 'react'
import shaker from "../pages/30644-200.png"
import "../index.css"


const ShakerAnim = () => {
  const [wobble, setWobble] = React.useState(0)
  return (
    <img
      className="shake"
      src={shaker}
      alt="jar"
      onClick={() => setWobble(1)}
      onAnimationEnd={() => setWobble(0)}
      wobble={wobble}
    />
  )
}
export default ShakerAnim