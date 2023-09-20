'use client';
import React from "react";
import { Center, Box, Flex, Image, Stack, Heading, Text, NumberInput, NumberInputField, Button, Spacer } from "@chakra-ui/react";

const CartItem = () => {

    return (
        <Center>
            <Flex borderWidth='1px' borderRadius='lg' w='1000px' h='300px' overflow='hidden' align='center'>
                
                <Box w='350px' h='230px' m='6'>
                    <Image w='100%' src='/Sofa.jpg' alt=''/>
                </Box>

                <Stack m='3' spacing='3' w='400px'>
                    <Heading size='md'>Sofa</Heading>
                    <Text noOfLines={4} h='100px'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                    $ 500
                    </Text>
                    <Button colorScheme='red' size='xs' variant='link'>Delete</Button>
                </Stack>

                <Spacer/>

                <Stack>

                    <Box>
                        <Center>
                            <Button colorScheme='teal' size='xs'>+</Button>
                        </Center> 
                    </Box>

                    <Box w='100px'>
                        <Center>
                            <NumberInput w='50px'>
                                <NumberInputField/>
                            </NumberInput>
                        </Center>
                    </Box>

                    <Box>
                        <Center>
                            <Button colorScheme='teal' size='xs'>-</Button>
                        </Center> 
                    </Box>

                </Stack>


            
            </Flex>
        </Center>
    )
};

export default CartItem;