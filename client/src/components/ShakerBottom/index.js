import React from 'react'
import Button from 'react-bootstrap/Button'


const ShakerBottom = () => {
 //Setting makeOne's inital state


    return (
        <div className="container">
        <div className="row">
          <div className="col-5 customizeShaker">
          <h3>Customize Your Shaker</h3>
          <p>did you know what you can do?</p>
            <ul>
            <li>Create Custom Shakers</li>
                <li>Add New Activities</li>
                <li>Delete Activities</li>
                <li>Update Activities</li>

            </ul>
            
            <Button variant="outline-secondary" href="/viewthemes">Start Customizing</Button> 
          </div>
         
          <div className="col-5 contactShaker">
            <h3>See ways we can improve?</h3>
            <p>contact us to tell us more!</p>
            <Button variant="outline-secondary" href="/contact">Contact Us</Button>
          </div>
        </div>
      </div>
    )
}

export default ShakerBottom
