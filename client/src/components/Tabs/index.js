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
  const [currentTab, setCurrentTab] = useState({
    theme: "Netflix & Chill",
    index: 0
  })
  const [editActivity, setEditActivity] = useState({})

  //loading all themes on page load
  useEffect(() => {
    loadThemes()
  }, [])

  //loading all themes and sets them to themes 
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
    setCurrentTab({ theme: [theme], index: parseInt(index) })
  }

  function handleDelete(id) {
    API.deleteActivity(currentTab.theme, id)
      .then(res => loadThemes())
      .catch(err => console.log(err));
  }
  function handleEdit(activity, index) {
    console.log(activity)
    setEditActivity({ activity: [activity] })
    handleSave(index)
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
      <div as={Container} className="themes-page">
        <Nav />
        <Row as={Row} className="row input-container">
          <Col xs={12} md={6} lg={4} className="input-area">
            <div className="shaker-form">
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
                    {/* <svg className="" disabled={!(formObject.theme)} onClick={handleNewShaker} height="250px" width="100%" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.08 373.45"><defs></defs><path d="M214.68,385.93c6.72,0,13.33.19,19.93-.12a8.13,8.13,0,0,0,5.33-2.56c29.53-35.86,88.6-35.83,118.22.06a8.24,8.24,0,0,0,5.34,2.51c5.63.32,11.28.11,17.68.11v56c-5.45,0-11.54-.19-17.6.12a8.25,8.25,0,0,0-5.44,2.46c-16.5,20-38.23,27.61-63.35,26.52-22.14-1-41-9.23-55.19-26.89-1-1.28-3.34-2-5.09-2.11-6.47-.25-13-.1-19.83-.1Z" transform="translate(-181.79 -224.01)" /><rect className="cls-2" x="16" y="160.88" width="200.2" height="57.05" /><text id="newshaker-jar" x="50%" y="53%" textAnchor="middle" fill="white">create new shaker</text></svg> */}
                    <svg className="create-shaker-btn" disabled={!(formObject.theme)} onClick={handleNewShaker} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" height="50"
                      viewBox="0 0 53.608 30.729" enableBackground="new 0 0 53.608 30.729" space="preserve">
                      <path d="M3.931,7.915c1.799,0,3.569,0.051,5.336-0.032c0.545-0.041,1.055-0.286,1.427-0.686c7.908-9.602,23.725-9.594,31.657,0.016
	c0.377,0.393,0.887,0.632,1.43,0.672c1.508,0.085,3.021,0.029,4.734,0.029V22.91c-1.459,0-3.09-0.051-4.713,0.031
	c-0.551,0.031-1.07,0.266-1.457,0.659c-4.418,5.355-10.236,7.394-16.963,7.102c-5.928-0.269-10.979-2.472-14.778-7.2
	c-0.268-0.344-0.895-0.536-1.363-0.565c-1.733-0.067-3.481-0.026-5.31-0.026V7.915z"/>
                      <rect y="7.636" width="53.608" height="15.276" /><text fontSize="7.5px" id="login-jar" x="50%" y="56%" textAnchor="middle" fill="white">create shaker</text>
                    </svg>
                  </div>
                  <p>Now add some ideas over here</p>
                  <FaArrowRight className="themesArrow"/>
                </form>
            </div>
          </Col>


          <Col xs={12} md={6} lg={8} className="export-container">
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
                      </tbody>
                    </Table>
                    <Input
                      placeholder="add an idea here"
                      value={formObject.name}
                      name="activity"
                      onChange={handleInputChange}>
                    </Input>
                    <div className="newActivityBtn">
                      {/* <svg className="" disabled={!(formObject.activity)} onClick={handleNewActivity} height="250px" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.08 373.45"><defs></defs><path d="M214.68,385.93c6.72,0,13.33.19,19.93-.12a8.13,8.13,0,0,0,5.33-2.56c29.53-35.86,88.6-35.83,118.22.06a8.24,8.24,0,0,0,5.34,2.51c5.63.32,11.28.11,17.68.11v56c-5.45,0-11.54-.19-17.6.12a8.25,8.25,0,0,0-5.44,2.46c-16.5,20-38.23,27.61-63.35,26.52-22.14-1-41-9.23-55.19-26.89-1-1.28-3.34-2-5.09-2.11-6.47-.25-13-.1-19.83-.1Z" transform="translate(-181.79 -224.01)" /><rect className="cls-2" x="16" y="160.88" width="200.2" height="57.05" /><text id="themes-jar" x="50%" y="53%" textAnchor="middle" fill="white">add new activity</text></svg> */}
                      <svg className="create-shaker-btn" disabled={!(formObject.activity)} onClick={handleNewActivity} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" height="50"
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
export default TabsPage