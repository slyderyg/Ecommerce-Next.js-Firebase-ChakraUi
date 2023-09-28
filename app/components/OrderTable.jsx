'use client';
import React, { useEffect, useState } from "react";
import { Center, TableContainer, Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';
import { collection, query, where, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { getStorage, ref, deleteObject } from "firebase/storage";
import { db } from '../firebase';

const OrderTable = () => {
    const [listOfOrders, setListOfOrders] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'orders'));
        const unsubscribe = onSnapshot(q, (querySnapshot)=>{
            let productsArr = [];

            querySnapshot.forEach((doc) => {
                productsArr.push({...doc.data(), id: doc.id});
            })
            console.log(productsArr);
            setListOfOrders(productsArr);
        });
    }, []);



  return (
    <Center>

        <TableContainer w='1600px'>
            <Table variant='striped' colorScheme='teal'>
                <Thead>
                <Tr>
                    <Th>User</Th>
                    <Th>List of items</Th>
                    <Th isNumeric>$ Price</Th>
                    <Th>Edit</Th>
                </Tr>
                </Thead>
                <Tbody>
                    {listOfOrders.map(el => 
                        <Tr key={el.id}>
                            <Td w='200px' overflow='hidden' whiteSpace='nowrap' textOverflow='ellipsis'>{el.user}</Td>
                            <Td>
                                    <ul>
                                        {el.data.map(el => <li key={el.id}>{el.name} x{el.quantity}</li>)}
                                    </ul>
                            </Td>
                            <Td isNumeric>{el.totalPrice}</Td>
                            <Td w='200px'>
                                <Button colorScheme='teal' size='xs' m='1'>Complete</Button>
                                <Button colorScheme='red' size='xs' m='1'>Cancel</Button>
                            </Td>
                        </Tr>
                    )}
                </Tbody>
            </Table>
        </TableContainer>


    </Center>
  )
}

export default OrderTable;