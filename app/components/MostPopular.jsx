'use client'
import React, { useEffect, useState } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
// hello i'am home computer;

import { Card, 
        CardHeader, 
        CardBody, 
        CardFooter, 
        Image, 
        Stack, 
        Heading, 
        Divider, 
        Button, 
        ButtonGroup, 
        Text,
        Flex
} from '@chakra-ui/react'

const MostPopular = () => {
    const [productItem, setProductItem] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'products'));
        const unsubscribe = onSnapshot(q, (querySnapshot)=>{
            let productsArr = [];

            querySnapshot.forEach((doc) => {
                productsArr.push({...doc.data(), id: doc.id});
            })

            setProductItem(productsArr);
        });
    }, [])


  return (
    <>
    <Flex justify='space-between'>
    {productItem.length > 0 ? (
        productItem.map(el => 
            <Card maxW='sm' key={el.id}>
                <CardBody>
                    <Image
                    src={el.imageUrl}
                    alt={el.name}
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>{el.name}</Heading>
                    <Text>
                        {el.description}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        $ {el.price}
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                    </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>)
    ): (null)}
    </Flex>
    </>
  )
}

export default MostPopular