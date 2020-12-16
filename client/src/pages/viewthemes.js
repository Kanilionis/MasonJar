// Import things
import React, { useState, useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Input, FormBtn } from '../components/Form';
import Button from "react-bootstrap/Button"
import Nav from '../components/Nav'
import Table from "react-bootstrap/Table"
import Edit from '../components/EditableText/EditableText'
import Container from 'react-bootstrap/Container'
import {FaEdit, FaTrash, FaSave, FaArrowRight, FaArrowDown } from 'react-icons/fa'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import "../index.css"
import API from "../utils/API"
import Footer from '../components/Footer'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

// Set State
const viewthemes = (props) => {
  //Setting comps initail state
  const [themes, setThemes] = useState([])

  const [formObject, setFormObject] = useState({
    theme: "",
    activity: ""
  })

  const [currentTab, setCurrentTab] = useState({
    theme: "Netflix & Chill",
    index: 0
  })

// Set Use Effect to load all themes
  useEffect(() => {
    loadThemes()
  }, [])

// Regularly updates the current database information
  function loadThemes() {
    API.getThemes()
      .then(res =>
        setThemes(res.data)
      )
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  // Handles new shakers/themes
  function handleNewShaker(event) {
    event.preventDefault();
    if (formObject.theme) {
      API.saveTheme(formObject.theme)
        .then(res => loadThemes())
        .catch(err => console.log(err));
    }
    setCurrentTab({ theme: [formObject.theme], index: (themes.length) })
    setFormObject({
      theme: "",
      activity: ""
    })
  };

// Handles new items/activities
  function handleNewActivity() {
    API.saveActivity(currentTab.theme, formObject.activity)
      .then(res => loadThemes())
      .catch(err => console.log(err));
      setFormObject({    theme: "",
      activity: ""})
  }

  // Sets state to whatever tab is open
  function handleTabChange(theme, index) {
    setCurrentTab({ theme: [theme], index: parseInt(index) })
  }

  // "Pulls" an item from an array based on its ID
  function handleDelete(id) {
    API.deleteActivity(currentTab.theme, id)
      .then(res => loadThemes())
      .catch(err => console.log(err));
  }

  // Deletes a shaker/theme if the user confirms
  function handleDeleteTheme(theme) {
    API.deleteTheme(theme)
      .then(res => loadThemes())
      .catch(err => console.log(err));
  }

  // Confirmation for a user to delete a shaker/theme
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

  // Themes Page Render
  return (
    <>
      <div as={Container} className="themes-page">
        <Nav />
        <Row as={Row} className="row input-container">

          {/* Left Side  //  Add New Shaker/Theme */}
          {/* <Col xs={12} md={6} lg={4}  */}
          <Col xs={12} md={12} lg={12} 
          className="input-area">
            <h2 className="customizeShakerH1">Create A New Shaker</h2>
            <div className="shaker-form">
                <form className="shaker-form-size">
                  <br></br>
                  <p className="new-shaker-text">enter the title or theme of your new shaker below</p>
                  <Input
                    className="input-box-text"
                    onChange={handleInputChange}
                    name="theme"
                    placeholder="ex. 'What's for Dinner'"
                    value={formObject.theme}
                  />
                  <div >
                      <svg className="create-shaker-btn" disabled={!(formObject.theme)} onClick={handleNewShaker} cursor="pointer" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" height="80"
                      viewBox="0 0 53.608 30.729" enableBackground="new 0 0 53.608 30.729" space="preserve">
                      <path d="M3.931,7.915c1.799,0,3.569,0.051,5.336-0.032c0.545-0.041,1.055-0.286,1.427-0.686c7.908-9.602,23.725-9.594,31.657,0.016
                      c0.377,0.393,0.887,0.632,1.43,0.672c1.508,0.085,3.021,0.029,4.734,0.029V22.91c-1.459,0-3.09-0.051-4.713,0.031
                      c-0.551,0.031-1.07,0.266-1.457,0.659c-4.418,5.355-10.236,7.394-16.963,7.102c-5.928-0.269-10.979-2.472-14.778-7.2
                      c-0.268-0.344-0.895-0.536-1.363-0.565c-1.733-0.067-3.481-0.026-5.31-0.026V7.915z"/>
                      <rect y="7.636" width="53.608" height="15.276" /><text fontSize="7.5px" id="login-jar" x="50%" y="56%" textAnchor="middle" fill="white">create shaker</text>
                    </svg>
                  </div>
                  <p>now add some ideas</p>
                  <FaArrowDown className="themesArrow"/>
                </form>
            </div>
          </Col>

          {/* Right Side  //  Database Render */}
          {/* <Col xs={12} md={6} lg={8}  */}
           <Col xs={12} md={12} lg={12} 
          className="export-container">
            <h2 className="customizeShakerH2">Customize Your Shaker</h2>
            <div className="row tableResults tabsRoot tabs-container">
              <Tabs className="col-12" selectedIndex={currentTab.index}  >
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
                        {
                        (theme.activities.length)
                        ?
                        <>
                        {theme.activities.map((activity, index) => (
                          <>
                            { //Check if seed data or custom
                              (themes.indexOf(theme) > 4 || index > 19)
                                ?
                                <>
                                  <tr>
                                    <td value={activity.name}>
                                      <>
                                        <FaTrash onClick={() => handleDelete(activity._id)} />
                                        <Edit loadThemes={loadThemes} index={index} currentTheme={currentTab.theme} text={activity.name} />
                                      </>
                                    </td>
                                  </tr>
                                </>
                                :
                                <>
                                  <tr>
                                    <td>{activity.name}</td>
                                  </tr>
                                </>
                            }
                          </>
                        ))}
                      
                        </>
                        :
                        <>
                        Add some items to your shaker!
                        </>
                        }
                      </tbody>
                    </Table>
                    <Input
                      placeholder="item name"
                      value={formObject.activity}
                      name="activity"
                      onChange={handleInputChange}>
                    </Input>
                    <div >
                      <svg className="add-new-btn" disabled={!(formObject.activity)} onClick={handleNewActivity} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" height="50"
                        viewBox="0 0 53.608 30.729" enableBackground="new 0 0 53.608 30.729" space="preserve">
                        <path d="M3.931,7.915c1.799,0,3.569,0.051,5.336-0.032c0.545-0.041,1.055-0.286,1.427-0.686c7.908-9.602,23.725-9.594,31.657,0.016
                        c0.377,0.393,0.887,0.632,1.43,0.672c1.508,0.085,3.021,0.029,4.734,0.029V22.91c-1.459,0-3.09-0.051-4.713,0.031
	                      c-0.551,0.031-1.07,0.266-1.457,0.659c-4.418,5.355-10.236,7.394-16.963,7.102c-5.928-0.269-10.979-2.472-14.778-7.2
	                      c-0.268-0.344-0.895-0.536-1.363-0.565c-1.733-0.067-3.481-0.026-5.31-0.026V7.915z"/>
                        <rect y="7.636" width="53.608" height="15.276" /><text fontSize="10px" id="login-jar" x="50%" y="56%" textAnchor="middle" fill="white">add new</text>
                      </svg>
                    </div>
                  </TabPanel>
                ))}
              </Tabs>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  )
}
export default viewthemes