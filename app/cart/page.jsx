'use client';
import React from "react";
import CartItem from "../components/CartItem";
import { Center, Box, Flex, Image, Stack, Heading, Text, NumberInput, NumberInputField, Button, Spacer, Table, Tbody, Tr, Td, TableContainer, Tfoot, Th } from "@chakra-ui/react";

const page = () => {
    return (
        <Center>
            <Flex w>

                <Box m='6'>
                    <CartItem />
                </Box>

                <Box borderWidth='1px' borderRadius='lg' w='300px' h='250px' overflow='hidden' m='6'>
                    <Stack>

                        <TableContainer>
                            <Table variant='simple'>
                                <Tbody>
                                <Tr>
                                    <Td>1 item</Td>
                                    <Td isNumeric size='sm'>25.4</Td>
                                </Tr>
                                <Tr>
                                    <Td>delivery</Td>
                                    <Td isNumeric size='sm'>0</Td>
                                </Tr>
                                </Tbody>
                                <Tfoot>
                                    <Tr>
                                        <Th>TOTAL</Th>

                                        <Th isNumeric>250</Th>
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