import React, { useState, useContext } from 'react';
import { Box, Image, Stack, Heading, Text, Button, ButtonGroup } from '@chakra-ui/react';
import { CartItemContext } from '../context/CartContext';

const ProductCard = ({ productItem, data }) => {
  const [inCart, setInCart] = useState(false);
  const productsInCart = useContext(CartItemContext);

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
        {!inCart? (<>
                <Button variant='solid' colorScheme='blue'>
                  Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue' onClick={() => {data(productItem.name, productItem.price, productItem.description, productItem.imageUrl, productItem.id); setInCart(true)}}>
                   Add to cart
                </Button>
                </>
        ):(
                  <Button variant='solid' colorScheme='blue'>
                      Go to cart
                  </Button>
        )}
      </ButtonGroup>
    
    </Box>

  )
}

export default ProductCard