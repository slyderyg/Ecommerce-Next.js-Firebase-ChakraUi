'use client';
import React, { useEffect, useState } from "react";
import { Center, TableContainer, Table, Thead, Tbody, Tr, Th, Td, Button, Link } from '@chakra-ui/react';
import { collection, query, addDoc, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
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
            setListOfOrders(productsArr);
        });
    }, []);

    const handleDeleteOrder = async (id) => {
        await deleteDoc(doc(db, "orders", id));
    };


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
                                <Button colorScheme='teal' size='xs' m='1' onClick={() => {newDoc(el.user, el.data, el.totalPrice); handleDeleteOrder(el.id)}}>Complete</Button>
                                <Button colorScheme='red' size='xs' m='1' onClick={() => handleDeleteOrder(el.id)}>Cancel</Button>
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

async function newDoc(user, data, totalPrice) {
    try {
        const docRef = await addDoc(collection(db, "completedOrders"), {
            user: user,
            data: data,
            totalPrice: totalPrice
        });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
};