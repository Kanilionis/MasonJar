import React, { useState, useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Input, FormBtn } from '../Form';
import { List, ListItem } from '../List';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"
import Nav from '../Nav'
import Table from "react-bootstrap/Table"
import Edit from '../EditableText/EditableText'
// import EditableText from '../EditableText'
import {
  FaEdit,
  FaTrash,
  FaSave

} from 'react-icons/fa'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

import "../../../src/index.css"

import API from '../../utils/API'

const TabsPage = (props) => {
  //Setting comps initail state
  const [themes, setThemes] = useState([])
  const [formObject, setFormObject] = useState({
    theme: "",
    activity: ""
  })
  const [currentShaker, setCurrentShaker] = useState({
    theme: "",
    activities: [],
    currentActivity: ""
  })
  const [currentTab, setCurrentTab] = useState({})

  const [editActivity, setEditActivity] = useState({})

  //loading all themes and storing them within setThemes
  useEffect(() => {
    loadThemes()
  }, [])

  //Loads a single theme and its activities based on a click



  //loading all themes and sets them to themes 
  function loadThemes() {
    API.getThemes()
      .then(res =>
        setThemes(res.data)
      )
      .catch(err => console.log(err));
  };

  function chooseTheme(theme) {
    API.getActivitiesByTheme(theme).then(res => {
      setCurrentShaker({ theme: [theme], activities: res.data[0].activities, currentActivity: res.data[0].activities[0].name })
    }).catch(err => console.log(err))
  }

  // Handles updating component state when the user types into the input field

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  function handleNewShaker(event) {
    event.preventDefault();
    if (formObject.theme) {
      API.saveTheme(formObject.theme)
        .then(res => loadThemes())
        .catch(err => console.log(err));
    }
  };

  function handleNewActivity() {
    API.saveActivity(currentTab.theme, formObject.activity)
      .then(res => loadThemes())
      .catch(err => console.log(err));
  }

  function handleTabChange(theme) {
    setCurrentTab({ theme: [theme] })
  }

  function handleDelete(activity) {

    API.deleteActivity(currentTab.theme, activity)
      .then(res => loadThemes())
      .catch(err => console.log(err));
  }

  function handleEdit(activity) {
    console.log(activity)
    setEditActivity({ activity: [activity] })
  }

  function handleSave(index) {
    API.updateActivity(currentTab.theme, editActivity.activity, index)
      .then(res => loadThemes())
      .catch(err => console.log(err));
  }

  function handleDeleteTheme(theme){
    API.deleteTheme(theme)
    .then(res => loadThemes())
    .catch(err => console.log(err));
  }

  function confirmDelete(theme) {
    const options = {
      childrenElement: () => <div />,
      customUI: ({ onClose }) =>
      <div className='custom-ui'>
      <h1 className="confirmHeader">Are you sure?</h1>
      <p>Are you sure you would like to delete {theme}?</p>
      <Button variant="outline-secondary" onClick={onClose}>No</Button>
      <Button variant="outline-secondary" onClick={() => {
          handleDeleteTheme(theme)
          onClose()
      }}>Yes, Delete it!</Button>
    </div>,
      closeOnEscape: true,
      closeOnClickOutside: true,
      willUnmount: () => {},
      afterClose: () => {},
      onClickOutside: () => {},
      onKeypressEscape: () => {}
    };
    confirmAlert(options)
  };

  return (
    <>
      <div className="themes-page">
        <Nav/>
        <div className="row input-container">
          {/* <Nav className="nav-overly" /> */}
          <div className="input-area split-2">

            <div className="shaker-form">
              {/* <div className="text-area-above-input"></div> */}
              <div class="wrapper-around"></div>
              <h2 className="smaller-text">Welcome to the customized shaker! <br></br>Please enter the title/theme of your <br></br> 
                shaker below and customized your activites to the right.</h2>
                </div>
                
              <div class="wrapper-around">
                
              <form className="shaker-form-size">
              <h3 className="new-shaker-text">Create A New Shaker</h3>
                
                <Input
                  className="input-box-text"
                  onChange={handleInputChange}
                  name="theme"
                  placeholder='What to make for dinner'
                  value={formObject.name}
                />
                <svg variant="outline-secondary"
                  disabled={!(formObject.theme)}
                  onClick={handleNewShaker} className="enter-btn login-btn" height="150px" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.08 373.45"><defs></defs><path d="M214.68,385.93c6.72,0,13.33.19,19.93-.12a8.13,8.13,0,0,0,5.33-2.56c29.53-35.86,88.6-35.83,118.22.06a8.24,8.24,0,0,0,5.34,2.51c5.63.32,11.28.11,17.68.11v56c-5.45,0-11.54-.19-17.6.12a8.25,8.25,0,0,0-5.44,2.46c-16.5,20-38.23,27.61-63.35,26.52-22.14-1-41-9.23-55.19-26.89-1-1.28-3.34-2-5.09-2.11-6.47-.25-13-.1-19.83-.1Z" transform="translate(-181.79 -224.01)"/><rect className="cls-2" x="16" y="160.88" width="200.2" height="57.05"/><text  id="login-jar" x="50%" y="53%" textAnchor="middle" fill="white">submit</text></svg>
                {/* <Button variant="outline-secondary"
                  disabled={!(formObject.theme)}
                  onClick={handleNewShaker}
                >
                  Submit
                </Button> */}
              </form>
            </div>
           </div>
          </div>
          <div className="export-container split-2">
            <div className="tableResults tabsRoot tabs-container">
              
              <Tabs defaultIndex={0}>
                <TabList>
                  {themes.map((theme, index) => (
                    <>
                      {
                        (index < 5)
                          ?
                          <>
                            <Tab onClick={() => handleTabChange(theme.theme)}>
                              {theme.theme}
                            </Tab>
                          </>
                          :
                          <>
                            <Tab onClick={() => handleTabChange(theme.theme)}>
                              {theme.theme} <FaTrash onClick={() => confirmDelete(theme.theme)} />
                            </Tab>
                          </>
                      }
                    </>
                  ))}
                </TabList>

                {themes.map(theme => (
                  <TabPanel>
                    <Table
                      className="themeTable" striped bordered hover>
                      <tbody>
                        {theme.activities.map((activity, index) => (
                          <> 
                            { //Check if seed data or custom
                              (themes.indexOf(theme) > 4 || index > 19)
                                ?
                                <>
                                  <tr>
                                    
                                    <td value={editActivity.activity}>
                                      <>
                                      <FaTrash onClick={() => handleDelete(activity.name)}/>
                                      <Edit handleSave={handleSave} loadThemes={loadThemes} index={index} currentTheme={currentTab.theme} text={activity.name}/>
                                      </>
                                        </td> 
                                      
                                  </tr>
                                </>
                                :
                                <>
                                
                                  
                                  <tr>
                                    <td><Edit handleSave={handleSave} loadThemes={loadThemes} index={index} currentTheme={currentTab.theme} text={activity.name}/></td> 
                                  </tr>
                                  
                                
                                </>
                            }
                          </>
                        ))}
                      </tbody>
                    </Table>
                    <Input
                      placeholder="activity name"
                      value={formObject.name}
                      name="activity"
                      onChange={handleInputChange}>
                    </Input>
                    <svg variant="outline-secondary"
                      disabled={!(formObject.activity)}
                      onClick={handleNewActivity} className="new-act-btn" height="150px" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.08 373.45"><defs></defs><path d="M214.68,385.93c6.72,0,13.33.19,19.93-.12a8.13,8.13,0,0,0,5.33-2.56c29.53-35.86,88.6-35.83,118.22.06a8.24,8.24,0,0,0,5.34,2.51c5.63.32,11.28.11,17.68.11v56c-5.45,0-11.54-.19-17.6.12a8.25,8.25,0,0,0-5.44,2.46c-16.5,20-38.23,27.61-63.35,26.52-22.14-1-41-9.23-55.19-26.89-1-1.28-3.34-2-5.09-2.11-6.47-.25-13-.1-19.83-.1Z" transform="translate(-181.79 -224.01)"/><rect className="cls-2" x="16" y="160.88" width="200.2" height="57.05"/><text  className="new-act-text" x="50%" y="53%" textAnchor="middle" fill="white">add activity</text></svg>
                    {/* <Button variant="outline-secondary"
                      disabled={!(formObject.activity)}
                      onClick={handleNewActivity}>Add A New Activity</Button> */}
                  </TabPanel>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
    </>
  )
}

export default TabsPage


