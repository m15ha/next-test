import styles from '../styles/Home.module.css';
// import Header from '../components/Header';
// import menu from './menu';
import Link from 'next/link';
import * as React from 'react';
import { Button, Flex, Heading, Input, useColorMode, useColorModeValue, Center } from '@chakra-ui/react';
import { ArrowForwardIcon, SunIcon } from '@chakra-ui/icons'

export default function Home() {
    return (
            <Flex height='100vh' alignItems='center' justifyContent='center'>
                <Flex direction='column' bg='blue.200' p={12} rounded={6}>
                    <Center><Heading mb={6}>Welcome</Heading></Center>
                    <Input
                        placeholder='email'
                        variant='filled'
                        mb={3}
                        type='email'
                    ></Input>
                    <Input
                        placeholder='password'
                        variant='filled'
                        mb={6}
                        type='password'
                    ></Input>
                    <Button rightIcon={<ArrowForwardIcon />} variant='solid' colorScheme='twitter'>
                    <Link href="/about" >Log in
                      </Link></Button>
                </Flex>
            </Flex>
    );
}
