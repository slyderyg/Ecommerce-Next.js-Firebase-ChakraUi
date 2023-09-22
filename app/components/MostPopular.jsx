'use client'
import React, { useEffect, useState, useContext } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { CartItemContext } from '../context/CartContext';
import { Box, Center, Text, Wrap, WrapItem} from '@chakra-ui/react'
import ProductCard from './ProductCard';

const MostPopular = () => {
    const [productItem, setProductItem] = useState([]);
    const data = useContext(CartItemContext);

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
    
    <Box m='6' borderWidth='1px'>
    <Center><Text fontSize='4xl'>Most popular</Text></Center>
    <Wrap justify='space-evenly' spacing='auto' >
        {productItem.length > 0 ? ( productItem.map(el => <WrapItem key={el.id} m='6'><Center><ProductCard productItem={el} data={data.handleAddToCart}/></Center></WrapItem>) ) : ( null )}
    </Wrap>
    </Box>
  )
}

export default MostPopular