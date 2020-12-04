import React, { useState, useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Input, FormBtn } from '../Form';
import { List, ListItem } from '../List';
import { Link } from "react-router-dom";

import "../../../src/index.css"

import API from '../../utils/API'

const TabsPage = () => {
  //Setting comps initail state
  const [themes, setThemes] = useState ([])
  const [formObject, setFormObject] = useState({})
  const [currentShaker, setCurrentShaker] = useState({
    theme: "",
    activities: [],
    currentActivity: ""
  })
  

  //loading all themes and storing them within setThemes
  useEffect(() => {
    loadThemes()
  }, [])

  //Loads a single theme and its activities based on a click



 //loading all themes and sets them to themes 
  function loadThemes (){
    API.getThemes()
     .then(res =>
      setThemes(res.data)
      )
      .catch(err => console.log(err));
  };

  function chooseTheme(theme){
    API.getActivitiesByTheme(theme).then(res => { 
      setCurrentShaker({theme: [theme], activities: res.data[0].activities, currentActivity: res.data[0].activities[0].name})
    }).catch(err => console.log(err))
  }

  // Handles updating component state when the user types into the input field

  function handleInputChange(event){
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event){
    event.preventDefault();
    if (formObject.theme && formObject.activity){
      API.saveTheme({
        theme: formObject.theme,
        activity: formObject.activity

      })
      .then(res => loadThemes())
      .catch (err => console.log(err));
    }
  };





























    return (
    <div>
      <div className="container-fluid">
        <div className="row input-container">
          <div className="col-md-6">
          <form>
              <Input
                onChange={handleInputChange}
                name="theme"
                placeholder="Name of Theme!!(required)"
              />

              <Input
                onChange={handleInputChange}
                name="activity"
                placeholder="Activity (required)"
              />
              
              <FormBtn
                disabled={!(formObject.activity && formObject.theme)}
                onClick={handleFormSubmit}
              >
                Submit 
              </FormBtn>
            </form>

          </div>

        </div>

              <Tabs>
                <TabList>
                  <Tab>Date Night In</Tab>
                  <Tab>Date Night Out</Tab>
                  <Tab>Netflix and Chill</Tab>
                  <Tab>Outdoor Avtivites</Tab>
                  <Tab>Weekend Trip</Tab>
                </TabList>

                <TabPanel>
                {themes.length ? (
                  <List>
                    {themes.map(theme => (
                      <ListItem key={theme._id}>
                        <Link to={"/themes/" + theme._id}>
                          <strong>
                             {theme.title} {theme.activity}
                          </strong>
                        </Link>
                        
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
                    
                 
                </TabPanel>
                <TabPanel>
                  <p>
                    <b>Date Night Out</b> 
                    <ul>
                        <li>To</li>
                    </ul>
                  </p>
                  <p>
                    
                  </p>
                </TabPanel>
                <TabPanel>
                  <p>
                    <b>Netflix and Chill</b> 
                    <ul>
                        <li>Shake</li>
                    </ul>
                  </p>
                  <p>
                    
                  </p>
                </TabPanel>
                <TabPanel>
                  <p>
                    <b>Outdoor Avtivites</b> 
                    <ul>
                        <li>it</li>
                    </ul>
                  </p>
                  <p>
                    
                  </p>
                </TabPanel>
                <TabPanel>
                  <p>
                    <b>Weekend Trip</b> 
                    <ul>
                        <li>Hello</li>
                    </ul>
                  </p>
                  <p>
                    
                  </p>
                </TabPanel>
              </Tabs>
          </div>   
        </div>
    )
}

export default TabsPage
