'use client'
import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { aboutText } from '../components/text'

const page = () => {
  return (
    <Flex m='6'>
    <Text fontSize='xl'>{aboutText}</Text>
    </Flex>
  )
}

export default page