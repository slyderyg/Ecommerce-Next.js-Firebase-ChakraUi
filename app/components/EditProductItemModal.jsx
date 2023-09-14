import React, { useEffect, useState } from 'react';
import { useDisclosure,
            Modal, 
            ModalOverlay,
            ModalContent,
            ModalHeader,
            ModalFooter,
            ModalBody,
            ModalCloseButton,
            Button,
            Box,
            Stack,
            Input,
            Textarea
         } from '@chakra-ui/react';



const EditProductItemModal = ( { props } ) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [productName, setProductName] = useState(props.name);
    const [productPrice, setProductPrice] = useState(props.price);
    const [productDescription, setProductDescription] = useState(props.description);

    const handleProductNameInput = (e) => {
        setProductName(e.target.value)
    };

    const handleProductPriceInput = (e) => {
        setProductPrice(e.target.value)
    };

    const handleProductDescriptionInput = (e) => {
        let inputValue = e.target.value;
        setProductDescription(inputValue);
    };
    
    return (
        <>
            <Button colorScheme='teal' size='xs' m='1' onClick={onOpen}>Edit</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{props.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>



                    <Box w='400px' border='1px' borderColor='gray.200'>

                        <Stack spacing={3} m='3'>

                            <Input variant='outline' placeholder='Product name' value={productName} onChange={handleProductNameInput} />
                            <Input type='number' placeholder='$ Price' value={productPrice} onChange={handleProductPriceInput}/>
                            <Textarea placeholder='Description' value={productDescription} onInput={handleProductDescriptionInput}/>
                            <Input variant='unstyled' type='file'  />


                        </Stack>

                    </Box>





                
                </ModalBody>
                <ModalFooter>
                <Button variant='ghost' mr={3} onClick={onClose}>
                    Close
                </Button>
                <Button colorScheme='teal' size='md'>Apply</Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
    )
}

export default EditProductItemModal;