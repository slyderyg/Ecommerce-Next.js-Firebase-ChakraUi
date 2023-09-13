import React, { useEffect, useState } from 'react'

import NextLink from 'next/link';

import { UserAuth } from '../context/AuthContext'

import { 
        Image, 
        Flex, 
        Spacer, 
        Box, 
        Button, 
        ButtonGroup, 
        Divider, 
        Center, 
        Link, 
        Show, 
        Menu,
        MenuButton,
        MenuList,
        MenuItem,
        IconButton,
        Avatar
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons'


const Navbar = () => {

    const { user, googleSignIn, logOut } = UserAuth();
    const [loading, setLoading] = useState(true);

    const handleSignIn = async () => {
        try {
            await googleSignIn()
        } catch(error) {
            console.log(error);
        }
    }
    
    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise ((resolve) => setTimeout(resolve, 50))
            setLoading(false)
        }
        checkAuthentication()
    }, [user])

  return (

        <Flex>
            <Box ml='6' mt='3'>
                <Image src='/logo.png' borderRadius='full' boxSize='100px' alt='Logo' />
            </Box>
            <Center height='100px' ml='6' mt='3'>
                <Divider orientation='vertical' />
            </Center>
            <Show above='md'>
            <Flex alignItems='center'>
                <Box ml='6'>
                    <Link as={NextLink} href='/'>HOME</Link>
                </Box>
                <Box ml='6'>
                    <Link as={NextLink} href='/'>CATALOG</Link>
                </Box>
                <Box ml='6'>
                    <Link as={NextLink} href='/'>ABOUT</Link>
                </Box>
                <Box ml='6'>
                    <Link as={NextLink} href='/'>CONTACTS</Link>
                </Box>
                <Box ml='6'>
                    <Link as={NextLink} href='/dashboard' color='green' >DASHBOARD</Link>
                </Box>
            </Flex>
            <Spacer />
            <Center height='100px' ml='6' mt='3'>
                <Divider orientation='vertical' />
            </Center>

            { loading ? null : !user? 
            (
            <Box m='6'>
                <ButtonGroup spacing='2' colorScheme='teal' size='xs'>
                    <Button onClick={handleSignIn}>Login</Button>
                    <Button onClick={handleSignIn}>Sign Up</Button>
                </ButtonGroup>
            </Box>
            ) 
            : 
            (
            <Flex flexDirection='column' justifyContent='center' alignItems='center' mr='6' ml='3'>
                <Box m='1'>
                    <Avatar size='sm' name={user.displayName} src={user.photoURL} />
                </Box>
                <Box mr='1'>
                    {user.displayName}
                </Box>
                <Box m='1'>
                    <Button colorScheme='teal' size='xs' onClick={handleSignOut}>Sign out</Button>
                </Box>   
            </Flex>
            ) }
            </Show>
            <Show below='md'>
            <Spacer />
            { loading ? null : !user? 
            <Flex alignItems='center'>
            <Box m='6'>
                <ButtonGroup spacing='2' colorScheme='teal' size='xs'>
                    <Button onClick={handleSignIn}>Login</Button>
                    <Button onClick={handleSignIn}>Sign Up</Button>
                </ButtonGroup>
            </Box>
            <Box m='6'>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                    />
                    <MenuList>
                        <MenuItem>
                        HOME
                        </MenuItem>
                        <MenuItem>
                        CATALOG
                        </MenuItem>
                        <MenuItem>
                        ABOUT
                        </MenuItem>
                        <MenuItem>
                        CONTACTS
                        </MenuItem>                                                                     
                    </MenuList>
                </Menu>
            </Box>
            </Flex>
            :
            <Flex alignItems='center'>
                <Box m='1'>
                    <Avatar size='sm' name={user.displayName} src={user.photoURL} />
                </Box>

                <Box m='6'>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                        />
                        <MenuList>
                            <MenuItem>
                            HOME
                            </MenuItem>
                            <MenuItem>
                            CATALOG
                            </MenuItem>
                            <MenuItem>
                            ABOUT
                            </MenuItem>
                            <MenuItem>
                            CONTACTS
                            </MenuItem> 
                            <MenuItem>
                            <Link as={NextLink} href='/dashboard' color='green' >DASHBOARD</Link>
                            </MenuItem> 
                            <MenuItem>
                                <Box m='1'>
                                    <Button colorScheme='teal' size='xs' onClick={handleSignOut}>Sign out</Button>
                                </Box>   
                            </MenuItem>                                                                  
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
            }
            </Show>
        </Flex>

  )
}

export default Navbar