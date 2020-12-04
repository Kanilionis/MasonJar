import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const TabsPage = () => {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Theme 1</Tab>
                    <Tab>Theme 2</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>

                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                </Tabs>

            
        </div>
    )
}

export default TabsPage
