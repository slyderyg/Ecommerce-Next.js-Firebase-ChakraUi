'use client';
import React, { useContext, useLayoutEffect, useState } from 'react';
import CartItem from "../components/CartItem";
import { Center, Box, Flex, Stack, Button, Table, Tbody, Tr, Td, TableContainer, Tfoot, Th } from "@chakra-ui/react";
import { CartItemContext } from '../context/CartContext';

const page = () => {
    const data = useContext(CartItemContext);
    
    const [totalQuantity, setTotalQuantity] = useState(data.cartData.length);

    const handleTotalIncrement = () => {
        setTotalQuantity(totalQuantity + 1)
    };

    const handleTotalDecrement = () => {
        totalQuantity < 1 ? (null) : (setTotalQuantity(totalQuantity - 1));
    };

    return (
        <Center>
            <Flex w>

                <Box m='6'>
                    {data.cartData.map(el => <CartItem key={el.id} data={el} handleTotalIncrement={handleTotalIncrement} handleTotalDecrement={handleTotalDecrement}/> )}
                </Box>

                <Box borderWidth='1px' borderRadius='lg' w='300px' h='250px' overflow='hidden' m='6'>
                    <Stack>

                        <TableContainer>
                            <Table variant='simple'>
                                <Tbody>
                                <Tr>
                                    <Td>{totalQuantity} item</Td>
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