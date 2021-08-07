import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Center, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import { Alert, AlertIcon, Button } from '@chakra-ui/react';
import { NextPageContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MainLayout } from '../../components/MainLayout';
import { MyUser } from '../../interfaces/users';

// interface PostPageProps {
//     post: MyPost;
// }

export default function User({ user }) {
    const router = useRouter();
    return (
        <MainLayout title={'Post'}>
            <Flex direction='column' p={12} rounded={6}>
                <Stack spacing={3}>
                    <Alert status='success'>
                        <AlertIcon />
                        <Text>{user.name}</Text>
                    </Alert>
                    <Alert status='error'>{user.email}</Alert>
                </Stack>
            </Flex>
            <Link href={'/users'}>
                <a>
                    <Center>
                        <Button
                            colorScheme='twitter'
                            size='xs'
                            variant='solid'
                            rightIcon={<ArrowForwardIcon />}
                        >
                            Back
                        </Button>
                    </Center>
                </a>
            </Link>
        </MainLayout>
    );
}

interface PostNextPageContext extends NextPageContext {
    query: {
        id: string;
    };
}


export async function getServerSideProps({params}) {
 
    const response = await fetch(`http://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();
    return { props: { user } };
}
