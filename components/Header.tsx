import {
    Box,
    Flex,
    Image,
    Center,
    Spacer,
    Button,
    Heading,
} from '@chakra-ui/react';
import Link from 'next/link';

export const Header = () => {
    return (
        <Flex bg='gray.100'>
            <Box p='2'>
                <Heading size='md'>News App</Heading>
            </Box>
            <Spacer />
            <Box>
                <Button colorScheme='yellow' mr='4' mt='1' size='sm'>
                    <Link href='/users'>Users</Link>
                </Button>
                <Button colorScheme='twitter' mr='4' mt='1' size='sm'>
                    <Link href='/posts'>Posts</Link>
                </Button>
                <Button colorScheme='facebook' mr='4' mt='1' size='sm'>
                    <Link href='/contact'>Contacts</Link>
                </Button>
                <Button colorScheme='red' mr='2' mt='1' size='sm'>
                    <Link href='/about'>About</Link>
                </Button>
            </Box>
        </Flex>
    );
};
