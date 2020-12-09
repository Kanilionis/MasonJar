import React, { useState, useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Input, FormBtn } from '../Form';
import Button from "react-bootstrap/Button"
import Nav from '../Nav'
import Table from "react-bootstrap/Table"
import Edit from '../EditableText/EditableText'
import Container from 'react-bootstrap/Container'
import {
  FaEdit,
  FaTrash,
  FaSave,
  FaArrowRight
} from 'react-icons/fa'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import "../../../src/index.css"
import API from '../../utils/API'
import Footer from '../../components/Footer'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
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
  const [currentTab, setCurrentTab] = useState({
    theme: "",
    index: 0
  })
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
  function handleTabChange(theme, index) {
    setCurrentTab({ theme: [theme] , index: parseInt(index)})
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
  function handleDeleteTheme(theme) {
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
      willUnmount: () => { },
      afterClose: () => { },
      onClickOutside: () => { },
      onKeypressEscape: () => { }
    };
    confirmAlert(options)
  };
  return (
    <>
      <div as={Container}className="themes-page">
        <Nav />
        <Row as={Row} className="row input-container">
          <Col xs={12} md={6} lg={4} className="input-area split-2">
            <div className="shaker-form">
              <div class="wrapper-around">
                <form className="shaker-form-size">
                  <h2 className="h2-text">Welcome to the customized shaker!</h2>
                  <p>Please enter the title/theme of your shaker below</p>
                  <h3 className="new-shaker-text">Create A New Shaker</h3>
                  <Input
                    className="input-box-text"
                    onChange={handleInputChange}
                    name="theme"
                    placeholder="ex. 'What's for Dinner'"
                    value={formObject.name}
                  />
                  <div className="newActivityBtn">
                      <svg className="" disabled={!(formObject.theme)} onClick={handleNewShaker} height="250px" width="100%" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.08 373.45"><defs></defs><path d="M214.68,385.93c6.72,0,13.33.19,19.93-.12a8.13,8.13,0,0,0,5.33-2.56c29.53-35.86,88.6-35.83,118.22.06a8.24,8.24,0,0,0,5.34,2.51c5.63.32,11.28.11,17.68.11v56c-5.45,0-11.54-.19-17.6.12a8.25,8.25,0,0,0-5.44,2.46c-16.5,20-38.23,27.61-63.35,26.52-22.14-1-41-9.23-55.19-26.89-1-1.28-3.34-2-5.09-2.11-6.47-.25-13-.1-19.83-.1Z" transform="translate(-181.79 -224.01)" /><rect className="cls-2" x="16" y="160.88" width="200.2" height="57.05" /><text id="newshaker-jar" x="50%" y="53%" textAnchor="middle" fill="white">create new shaker</text></svg>
                    </div>
                  <p>Now add some ideas over here</p>
                  <FaArrowRight />
                </form>
              </div>
            </div>
          </Col>
        
      
          <Col xs={12} md={6} lg={8}className="export-container split-2">
            <h2 className="customizeShakerH2">customize your shaker</h2>
            <div className="tableResults tabsRoot tabs-container">
              <Tabs selectedIndex={currentTab.index}  >
                <TabList>
                  {themes.map((theme, index) => (
                    <>
                      {
                        (index < 5)
                          ?
                          <>
                            <Tab onClick={() => handleTabChange(theme.theme, index)}>
                              {theme.theme}
                            </Tab>
                          </>
                          :
                          <>
                            <Tab onClick={() => handleTabChange(theme.theme, index)}>
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
                                        <FaTrash onClick={() => handleDelete(activity.name)} />
                                        <Edit handleSave={handleSave} loadThemes={loadThemes} index={index} currentTheme={currentTab.theme} text={activity.name} />
                                      </>
                                    </td>
                                  </tr>
                                </>
                                :
                                <>
                                  <tr>
                                    <td><Edit handleSave={handleSave} loadThemes={loadThemes} index={index} currentTheme={currentTab.theme} text={activity.name} /></td>
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
                    <div className="newActivityBtn">
                      <svg className="" disabled={!(formObject.activity)} onClick={handleNewActivity} height="250px" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.08 373.45"><defs></defs><path d="M214.68,385.93c6.72,0,13.33.19,19.93-.12a8.13,8.13,0,0,0,5.33-2.56c29.53-35.86,88.6-35.83,118.22.06a8.24,8.24,0,0,0,5.34,2.51c5.63.32,11.28.11,17.68.11v56c-5.45,0-11.54-.19-17.6.12a8.25,8.25,0,0,0-5.44,2.46c-16.5,20-38.23,27.61-63.35,26.52-22.14-1-41-9.23-55.19-26.89-1-1.28-3.34-2-5.09-2.11-6.47-.25-13-.1-19.83-.1Z" transform="translate(-181.79 -224.01)" /><rect className="cls-2" x="16" y="160.88" width="200.2" height="57.05" /><text id="themes-jar" x="50%" y="53%" textAnchor="middle" fill="white">add new activity</text></svg>
                    </div>
                  </TabPanel>
                ))}
              </Tabs>
            </div>
          </Col>
      
       </Row>
      </div>
      <Footer/>
    </>
  )
}
export default TabsPage