'use client';
import React, { useState, useContext } from "react";
import { Center, Box, Flex, Image, Stack, Heading, Text, Input, Button, Spacer } from "@chakra-ui/react";
import { CartItemContext } from "../context/CartContext";

const CartItem = ({ data }) => {
    const data2 = useContext(CartItemContext);
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
        data2.handleSearch(data, (quantity + 1));
    };

    const handleDecrement = () => {
        quantity < 1 ? (null) : (setQuantity(quantity - 1));
        quantity < 1 ? (null) : (data2.handleSearch(data, (quantity - 1)));
    };

    const handleChange = (e) => {
        
    }

    return (
        <Center>
            <Flex borderWidth='1px' borderRadius='lg' w='1000px' h='300px' overflow='hidden' align='center' mb='3'>
                
                <Box w='350px' h='230px' m='3'>
                    <Image w='100%' src={data.imageUrl} alt=''/>
                </Box>

                <Stack m='3' spacing='3' w='400px'>
                    <Heading size='md'>{data.name}</Heading>
                    <Text noOfLines={4} h='100px'>
                    {data.description}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                    $ {data.price}
                    </Text>
                    <Button colorScheme='red' size='xs' variant='link' onClick={()=>{data2.handleDelete(data.id)}}>Delete</Button>
                </Stack>

                <Spacer/>

                <Stack>

                    <Box>
                        <Center>
                            <Button colorScheme='teal' size='xs' onClick={handleIncrement}>+</Button>
                        </Center> 
                    </Box>

                    <Box w='100px'>
                        <Center>
                            <Input w='55px' type='number' value={quantity} onChange={handleChange}/>
                        </Center>
                    </Box>

                    <Box>
                        <Center>
                            <Button colorScheme='teal' size='xs' onClick={handleDecrement}>-</Button>
                        </Center> 
                    </Box>

                </Stack>


            
            </Flex>
        </Center>
    )
};

export default CartItem;