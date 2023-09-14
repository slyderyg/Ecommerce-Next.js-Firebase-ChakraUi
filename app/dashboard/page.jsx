'use client'
import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import ProductUploader from '../components/ProductUploader';
import ManageTable from '../components/ManageTable';

const page = () => {
   
  return (

            <Tabs variant='enclosed' mt='6' >
                <TabList>
                    <Tab>Manage</Tab>
                    <Tab>Add new product</Tab>
                </TabList>
                <TabPanels>

                    <TabPanel>
                        <ManageTable />
                    </TabPanel>

                    <TabPanel>
                        <ProductUploader />
                    </TabPanel>

                </TabPanels>
            </Tabs>

        )
}

export default page