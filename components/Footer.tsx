import {
    Box,
    Flex,
    Spacer,
    useColorModeValue,
    useColorMode,
    Text,
    Center,
} from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons';

export const Footer = () => {
    const { toggleColorMode } = useColorMode();
    const formBackground = useColorModeValue('gray.800', 'gray.600');
    return (
        <Flex
            bg={formBackground}
            p={3}
            justifyContent='center'
            className='footerz'
        >
            <Text color='gray.50'>Proudly made in Montreal</Text>
            <SunIcon
                w={5}
                h={5}
                color='red.500'
                onClick={toggleColorMode}
                ml={2}
            />
            <style jsx>{`
                .footerz {
                }
                .link {
                    text-decoration: none;
                }
            `}</style>
        </Flex>
    );
};
