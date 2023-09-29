import React, { useState, useContext, useEffect } from 'react';
import { Box, Image, Stack, Heading, Text, Button, ButtonGroup, Link, Center } from '@chakra-ui/react';
import { CartItemContext } from '../context/CartContext';
import NextLink from 'next/link';

const ProductCard = ({ productItem, data }) => {
  const [inCart, setInCart] = useState(false);
  const productsInCart = useContext(CartItemContext);

  useEffect(() => {productsInCart.cartData.find(product => product.id === productItem.id) !== undefined && setInCart(true)}, []);
 

  return (

    <Box borderWidth='1px' borderRadius='lg' w='350px' h='520px' overflow='hidden'>
      <Box w='350px' h='230px' overflow='hidden' alignItems='end'>
        <Image w='100%' src={productItem.imageUrl} alt='' />
      </Box>
      <Stack m='3' spacing='3'>
        <Heading size='md'>{ productItem.name }</Heading>
        <Text noOfLines={4} h='100px'>
          {productItem.description}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          $ {productItem.price}
        </Text>
      </Stack>

      <ButtonGroup m='3' spacing='2'>
        {!inCart? (
                <Button variant='solid' colorScheme='blue' onClick={() => {data(productItem.name, productItem.price, productItem.description, productItem.imageUrl, productItem.id); setInCart(true)}}>
                   Add to cart
                </Button>
        ):(
                <Link as={NextLink} href='/cart' color='green' ml='4'><Image src='/cart.svg'  boxSize='30px' alt='cart' /></Link>
        )}
      </ButtonGroup>
    
    </Box>

  )
}

export default ProductCard