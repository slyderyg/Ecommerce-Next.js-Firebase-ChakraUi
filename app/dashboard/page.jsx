'use client'
import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Spinner } from '@chakra-ui/react';
import ProductUploader from '../components/ProductUploader';
import ManageTable from '../components/ManageTable';
import OrderTable from '../components/OrderTable';
import CompletedOrdersTable from '../components/CompletedOrdersTable';

const page = () => {

    const { user } = UserAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise ((resolve) => setTimeout(resolve, 300));
            setLoading(false);
        }
        checkAuthentication();
    }, [user]);
   
  return (
            <>
                    {loading? (<Spinner />) : user? (            
                                <Tabs variant='enclosed' mt='6' >
                                    <TabList>
                                        <Tab>Manage</Tab>
                                        <Tab>Add new product</Tab>
                                        <Tab>Active Orders</Tab>
                                        <Tab>Completed Orders</Tab>

                                    </TabList>
                                    <TabPanels>

                                        <TabPanel>
                                            <ManageTable />
                                        </TabPanel>

                                        <TabPanel>
                                            <ProductUploader />
                                        </TabPanel>

                                        <TabPanel>
                                            <OrderTable />
                                        </TabPanel>

                                        <TabPanel>
                                            <CompletedOrdersTable />
                                        </TabPanel>

                                    </TabPanels>
                                </Tabs>
                            ) 
                            : 
                            (
                                <p>You must be logged in</p>
                            )
                    }
            </>

        )
}

export default page