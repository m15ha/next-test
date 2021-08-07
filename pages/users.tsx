import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Spinner,
} from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MyUser } from '../interfaces/users';
import { NextPageContext } from 'next';

interface UserPageProps {
    posts: MyUser[];
}

export default function Users({ users: serverUsers }) {
    const [users, setUsers] = useState(serverUsers);
    useEffect(() => {
        async function load() {
            const response = await fetch('http://jsonplaceholder.typicode.com/users');
            const json = await response.json();
            setUsers(json);
        }
        if (!serverUsers) {
            load();
        }
    }, []);

    if (!users) {
        return (
            <MainLayout>
                <Spinner />
            </MainLayout>
        );
    }
    return (
        <MainLayout title={'Users'}>
            <Flex direction='column' p={12} rounded={6}>
                {users.map((user) => (
                    <Stack
                        spacing={3}
                        key={user.id}
                        p={2}
                        _hover={{ shadow: 'md' }}
                    >
                        {/* <Alert status='success'> */}
                        {/* <AlertIcon /> */}
                        <Link href={`/user/[id]`} as={`/user/${user.id}`}>
                            <a>
                                <Text>{user.name}</Text>
                            </a>
                        </Link>
                        {/* </Alert> */}
                    </Stack>
                ))}
            </Flex>
        </MainLayout>
    );
}

Users.getStaticProps = async ({ req }: NextPageContext) => {
    if (!req) {
        return { posts: null };
    }
    const response = await fetch(`http://jsonplaceholder.typicode.com/users`);
    const users: MyUser[] = await response.json();
    return {       
        props: {users}
    };
};