import React from 'react'
import Button from 'react-bootstrap/Button'


const ShakerBottom = () => {
 //Setting makeOne's inital state
function goToThemes(){
  window.location = "/viewthemes"
}
function goToContact(){
  window.location = "/contact"
}

    return (
      <>
      <br></br>
        <div className="container enter-cards">
        <div className="row">
          <div className="col-md-4-col-sm-8 customizeShaker">
          <h3>Create Your Own Shaker!</h3>
          {/* <p>Did you know that you can make your own shaker?</p> */}
          <div className="custom-shaker-list">
            
                <li>Pick your theme</li>
                <li>Add New Activities</li>
                <li>Delete Activities</li>
                <li>Update Activities</li>

            
            </div>
            <svg onClick={goToThemes} className="shaker-pg-btn-1" variant="outline-secondary" height="150px" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.08 373.45"><defs></defs><path d="M214.68,385.93c6.72,0,13.33.19,19.93-.12a8.13,8.13,0,0,0,5.33-2.56c29.53-35.86,88.6-35.83,118.22.06a8.24,8.24,0,0,0,5.34,2.51c5.63.32,11.28.11,17.68.11v56c-5.45,0-11.54-.19-17.6.12a8.25,8.25,0,0,0-5.44,2.46c-16.5,20-38.23,27.61-63.35,26.52-22.14-1-41-9.23-55.19-26.89-1-1.28-3.34-2-5.09-2.11-6.47-.25-13-.1-19.83-.1Z" transform="translate(-181.79 -224.01)"/><rect class="cls-2" x="16" y="160.88" width="200.2" height="57.05"/><text  id="try-it" x="50%" y="54%" textAnchor="middle" fill="white">try it</text></svg>

            {/* <Button className="extras" variant="outline-dark" href="/viewthemes">Try It</Button>  */}
          </div>
          <div className="col-md-4-col-sm-8 contactShaker">
            <h3>How Can We Improve??</h3>
            <p>contact us to tell us more</p>
            <svg onClick={goToContact} className="shaker-pg-btn-2" variant="outline-secondary" height="150px" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.08 373.45"><defs></defs><path d="M214.68,385.93c6.72,0,13.33.19,19.93-.12a8.13,8.13,0,0,0,5.33-2.56c29.53-35.86,88.6-35.83,118.22.06a8.24,8.24,0,0,0,5.34,2.51c5.63.32,11.28.11,17.68.11v56c-5.45,0-11.54-.19-17.6.12a8.25,8.25,0,0,0-5.44,2.46c-16.5,20-38.23,27.61-63.35,26.52-22.14-1-41-9.23-55.19-26.89-1-1.28-3.34-2-5.09-2.11-6.47-.25-13-.1-19.83-.1Z" transform="translate(-181.79 -224.01)"/><rect class="cls-2" x="16" y="160.88" width="200.2" height="57.05"/><text  id="contact-us" x="50%" y="53%" textAnchor="middle" fill="white">contact us</text></svg>
            {/* <Button className="extras" variant="outline-dark" href="/contact">Contact Us</Button> */}
          </div>
        </div>
      </div>
      </>
    )
}

export default ShakerBottom
