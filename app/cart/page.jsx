'use client';
import React, { useContext, useLayoutEffect, useState } from 'react';
import CartItem from "../components/CartItem";
import { Center, Box, Flex, Stack, Button, Table, Tbody, Tr, Td, TableContainer, Tfoot, Th, Text } from "@chakra-ui/react";
import { CartItemContext } from '../context/CartContext';

const page = () => {
    const data = useContext(CartItemContext);
    

    return (
        <Center>
            <Flex>
                {data.cartData.length > 0 ? (
                <Box m='3'>
                    {data.cartData.map(el => <CartItem key={el.id} data={el}/> )}
                </Box>
                ): (
                    <Box borderWidth='1px' borderRadius='lg' w='1000px' h='250px' overflow='hidden' align='center' m='3'>
                        <Text fontSize='md' m='6'>
                            Cart is empty...
                        </Text>
                    </Box>
                )}
                <Box borderWidth='1px' borderRadius='lg' w='300px' h='250px' overflow='hidden' m='3'>
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

                        <Button colorScheme='teal' m='3'>Checkout</Button>
                    </Stack>
                </Box>

            </Flex>
        </Center>

    )
};

export default page;