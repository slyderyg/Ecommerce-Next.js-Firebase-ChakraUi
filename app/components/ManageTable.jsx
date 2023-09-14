import React, { useEffect, useState } from "react";

import { Center, TableContainer, Table, Thead, Tbody, Tr, Th, Td, Button, Box} from '@chakra-ui/react';

import { collection, query, where, onSnapshot } from 'firebase/firestore';

import { db } from '../firebase';
import EditProductItemModal from "./EditProductItemModal";

const ManageTable = () => {

    const [productItem, setProductItem] = useState([]); //downloading product list

    // useEffect for downloading product list and subscribe for updates
    useEffect(() => {
        const q = query(collection(db, 'products'));
        const unsubscribe = onSnapshot(q, (querySnapshot)=>{
            let productsArr = [];

            querySnapshot.forEach((doc) => {
                productsArr.push({...doc.data(), id: doc.id});
            })

            setProductItem(productsArr);
        });
    }, []);


    return (
        
        <Center>

                    <TableContainer w='1600px'>
                        <Table variant='striped' colorScheme='teal'>
                            <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Description</Th>
                                <Th isNumeric>$ Price</Th>
                                <Th>Edit</Th>
                            </Tr>
                            </Thead>
                            <Tbody>
                                {productItem.length > 0 ? (productItem.map(el =>
                            <Tr key={el.id}>
                                <Td>{el.name}</Td>
                                <Td><Box width='600px' overflow='hidden' whiteSpace='nowrap' textOverflow='ellipsis'>{el.description}</Box></Td>
                                <Td isNumeric>{el.price}</Td>
                                <Td w='200px'>
                                    <EditProductItemModal props={el} />
                                    <Button colorScheme='red' size='xs' m='1'>Delete</Button>
                                </Td>
                            </Tr>
                            )) : (null)}
                            </Tbody>
                        </Table>
                    </TableContainer>


        </Center>
 
    )
};

export default ManageTable;