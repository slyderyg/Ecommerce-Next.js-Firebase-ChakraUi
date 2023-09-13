'use client'
import { Image, Flex, Spacer, Box } from '@chakra-ui/react'
import MostPopular from './components/MostPopular'

export default function Home() {
  return (
    <main>
      <Box m='6' >
        <Image src='/banner.jpg' width="100%" alt='Banner' />
      </Box>
      <MostPopular />
    </main>
  )
}
