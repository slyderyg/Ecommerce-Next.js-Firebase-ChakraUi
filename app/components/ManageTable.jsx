import React from "react";

import { Center, TableContainer, Table, Thead, Tbody, Tr, Th, Td, Button, Text} from '@chakra-ui/react';

const ManageTable = () => {
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
                    <Tr>
                        <Td>Sofa</Td>
                        <Td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Td>
                        <Td isNumeric>25.4</Td>
                        <Td w='200px'>
                            <Button colorScheme='teal' size='xs' m='1'>Edit</Button>
                            <Button colorScheme='teal' size='xs' m='1'>Delete</Button>
                            <Button colorScheme='teal' size='xs' m='1'>Change picture</Button>
                        </Td>
                    </Tr>

                    
                    </Tbody>
                </Table>
            </TableContainer>
        </Center>

    )
};

export default ManageTable;