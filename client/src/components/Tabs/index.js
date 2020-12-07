import React, { useState, useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Input, FormBtn } from '../Form';
import { List, ListItem } from '../List';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"
import Nav from '../Nav'
import Table from "react-bootstrap/Table"

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

  //loading all themes and storing them within setThemes
  useEffect(() => {
    loadThemes()
  }, [])

  const rowEvents = {
    onClick: (e, Table) => {
      console.log(Table)
    }
  };



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

  return (
    <>
      <div className="container-fluid">
        <Nav/>
        <div className="row input-container split">
        <div className="input-area">
          <div className="shaker-form">
            <form className="shaker-form-size">
              <h3>Create A New Shaker</h3>
              <Input
                onChange={handleInputChange}
                name="theme"
                placeholder='What to make for dinner'
                value={formObject.name}
              />
              <Button variant="outline-secondary"
                disabled={!(formObject.theme)}
                onClick={handleNewShaker}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
          <div className="export-container split">
            <div className="tableResults tabsRoot tabs-container">
              <Tabs defaultTab="vertical-tab-one" vertical className="vertical-tabs">
                <TabList>
                  {themes.map(theme => (
                    <Tab onClick={() => handleTabChange(theme.theme)}>
                      {theme.theme}
                    </Tab>
                  ))}
                </TabList>

                {themes.map(theme => (
                  <TabPanel>
                    <Table 
                    onClick={rowEvents}
                    className="themeTable" striped bordered hover>
                      <tbody>
                        {theme.activities.map((activity, index) => (
                          <>
                            { //Check if seed data or custom
                              (themes.indexOf(theme) > 4 || index > 19)
                                ?
                                <>
                                  <tr>
                                    <td>
                                      <Button>edit</Button><Button onClick={() => { handleDelete(activity.name) }}>delete</Button>
                                      {activity.name}</td>
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
                      placeholder="activity name"
                      value={formObject.name}
                      name="activity"
                      onChange={handleInputChange}>
                    </Input>
                    <Button variant="outline-secondary"
                      disabled={!(formObject.activity)}
                      onClick={handleNewActivity}>Add A New Activity</Button>
                  </TabPanel>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TabsPage


