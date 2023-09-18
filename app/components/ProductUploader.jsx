'use client'
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from 'uuid';
import { Box, Input, Textarea, Stack, Button, Spinner } from '@chakra-ui/react';


const ProductUploader = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [imageUpload, setImageUpload] = useState(0);
    const [uploading, setUploading] = useState(false);
  

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

    const handleImageUpload = (e) => {
        setImageUpload(e.target.files[0])
    };

    const handleClick = () => {
        if (imageUpload == null || !productName || !productPrice || !productDescription) return;

        setUploading(true);

        async function newDoc() {
            try {
                const docRef = await addDoc(collection(db, "products"), {
                    name: productName,
                    price: productPrice,
                    description: productDescription,
                    imageUrl: imageUrl,
                    imageName: imageName
                });
            } catch (e) {
              console.error("Error adding document: ", e);
            }
        };
        
        let imageName = `images/${v4() + imageUpload.name}`;
        let imageUrl = '';
        const imageRef = ref(storage, imageName);
        
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            return (getDownloadURL(ref(storage, imageName)))
        }).then((url) => {
            imageUrl = url;
            newDoc();
            setUploading(false);
        });


        setProductName('');
        setProductPrice('');
        setProductDescription('');

      }

  return (
    <>
    {uploading? (
        <Spinner size='xl' />
    ) : (
        <Box w='400px' border='1px' borderColor='gray.200'>

            <Stack spacing={3} m='3'>

                <Input variant='outline' placeholder='Product name' value={productName} onChange={handleProductNameInput}/>
                <Input type='number' placeholder='$ Price' value={productPrice} onChange={handleProductPriceInput}/>
                <Textarea placeholder='Description' value={productDescription} onInput={handleProductDescriptionInput}/>
                <Input variant='unstyled' type='file' onChange={handleImageUpload} />
                <Button colorScheme='teal' size='md' onClick={handleClick}>
                    + Add
                </Button>

            </Stack>

        </Box>
        )
    }
</>
  )
}
export default ProductUploader