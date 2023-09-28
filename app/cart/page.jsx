'use client';
import React, { useContext, useState } from 'react';
import CartItem from "../components/CartItem";
import { Center, Box, Flex, Stack, Button, Table, Tbody, Tr, Td, TableContainer, Tfoot, Th, Text, Spinner } from "@chakra-ui/react";
import { CartItemContext } from '../context/CartContext';
import { UserAuth } from '../context/AuthContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const page = () => {
    const data = useContext(CartItemContext);
    const [uploading, setUploading] = useState(false);
    const [orderSend, setOrderSend] = useState(false);

    const { user } = UserAuth();

    async function newDoc() {
        try {
            const docRef = await addDoc(collection(db, "orders"), {
                user: user.displayName,
                data: data.cartData,
                totalPrice: data.totalPrice
            });
            setUploading(false);
            data.setCartData([]);
            setOrderSend(true);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
    };

    const handleCheckout = () => {
        setUploading(true);
        newDoc();
    }
    
    return (
        <Center>
            <Flex>
                {data.cartData.length > 0 ? (
                <Box m='3'>
                    {data.cartData.map(el => <CartItem key={el.id} data={el}/> )}
                </Box>
                ) : (!orderSend ? (
                    <Box borderWidth='1px' borderRadius='lg' w='1000px' h='250px' overflow='hidden' align='center' m='3'>
                        <Text fontSize='md' m='6'>
                            Cart is empty...
                        </Text>
                    </Box>
                ) : (
                    <Box borderWidth='1px' borderRadius='lg' w='1000px' h='250px' overflow='hidden' align='center' m='3'>
                        <Text fontSize='md' m='6'>
                            Your order has been successfully completed!
                        </Text>
                    </Box> 
                ) 
                )}
                {data.cartData.length > 0 ? (
                <Box borderWidth='1px' borderRadius='lg' w='300px' h='250px' overflow='hidden' m='3'>
                    {uploading ? (<Center><Spinner size='xl' mt='6'/></Center>):(
                    <Stack>

                        <TableContainer>
                            <Table variant='simple'>
                                <Tbody>
                                <Tr>
                                    <Td>{data.totalQuantity} item</Td>
                                    <Td isNumeric size='sm'>${data.totalPrice}</Td>
                                </Tr>
                                </Tbody>
                                <Tfoot>
                                    <Tr>
                                        <Th>TOTAL PRICE</Th>

                                        <Th isNumeric>${data.totalPrice}</Th>
                                    </Tr>
                                </Tfoot>
                            </Table>
                        </TableContainer>

                        <Button colorScheme='teal' m='3' onClick={handleCheckout}>Checkout</Button>
                    </Stack>
                    )}
                </Box>
                
                ):(null)}

            </Flex>
        </Center>

    )
};

export default page;