import React from 'react'
import Button from 'react-bootstrap/Button'


const ShakerBottom = () => {
 //Setting makeOne's inital state


    return (
      <>
      <br></br>
        <div className="container enter-cards">
        <div className="row">
          <div className="col-4 customizeShaker">
          <h3>Customize Your Shaker</h3>
          <p>Did you know that you can make your own shaker?</p>
          <div className="custom-shaker-list">
            
                <li>Pick your theme</li>
                <li>Add New Activities</li>
                <li>Delete Activities</li>
                <li>Update Activities</li>

<<<<<<< HEAD
            
            </div>
            <Button className="extras" variant="outline-dark" href="/viewthemes">Try It</Button> 
          </div>
          <div className="col-4 contactShaker">
=======
            </ul>
            
            <Button variant="outline-secondary" href="/viewthemes">Start Customizing</Button> 
          </div>
         
          <div className="col-5 contactShaker">
>>>>>>> main
            <h3>See ways we can improve?</h3>
            <p>contact us to tell us more!</p>
            <Button className="extras" variant="outline-dark" href="/contact">Contact Us</Button>
          </div>
        </div>
      </div>
      </>
    )
}

export default ShakerBottom
