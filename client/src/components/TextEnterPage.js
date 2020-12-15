import React from "react"
import { Carousel } from "react-bootstrap"
import "./entertext.css"

 const textArray = [
    {
      "text": "What should we do?"
    },
    {
      "text": "How about a movie?"
    },
    {
      "text": "Maybe a dinner date?"
    }
  ]


class TextEnterPage extends React.Component{

  state = {
    textArray: textArray
  }

  
 


render(){

  return(
    <>
    <Carousel controls={false} fade={true} indicators={false} interval={2500} >
    {this.state.textArray.map(text => (
      <Carousel.Item >
        <div className="text-animation">{text.text}</div>
      </Carousel.Item>
    ))}
    </Carousel>  
    
    </>
  )
}
}

export default TextEnterPage