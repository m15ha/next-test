import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Stack,
    Flex,
    Button,
    Center,
    HStack,
} from '@chakra-ui/react';
import { Header } from '../components/Header';
import Router from 'next/router';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { MainLayout } from '../components/MainLayout';

export default function contacts() {
    return (
        <MainLayout>
            <Flex direction='column' p={12} rounded={6}>
                <Stack spacing={3}>
                    <Alert status='error'>
                        <AlertIcon />
                        There was an error processing your request
                    </Alert>

                    <Alert status='success'>
                        <AlertIcon />
                        Data uploaded to the server. Fire on!
                    </Alert>

                    <Alert status='warning'>
                        <AlertIcon />
                        Seems your account is about expire, upgrade now
                    </Alert>

                    <Alert status='info'>
                        <AlertIcon />
                        Chakra is going live on August 30th. Get ready!
                    </Alert>
                </Stack>
            </Flex>

            <Center>
                <Button
                    colorScheme='twitter'
                    size='xs'
                    variant='solid'
                    onClick={() => Router.push('/')}
                    rightIcon={<ArrowForwardIcon />}
                >
                    Back
                </Button>
            </Center>
        </MainLayout>
    );
}
