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

export default function Posts({ posts: serverPosts }) {
    const [posts, setPosts] = useState(serverPosts);
    useEffect(() => {
        async function load() {
            const response = await fetch('http://localhost:4200/posts');
            const json = await response.json();
            setPosts(json);
        }
        if (!serverPosts) {
            load();
        }
    }, []);

    if (!posts) {
        return (
            <MainLayout>
                <Spinner />
            </MainLayout>
        );
    }
    return (
        <MainLayout title={'Posts'}>
            <Flex direction='column' p={12} rounded={6}>
                {posts.map((post) => (
                    <Stack
                        spacing={3}
                        key={post.id}
                        p={2}
                        _hover={{ shadow: 'md' }}
                    >
                        {/* <Alert status='success'> */}
                        {/* <AlertIcon /> */}
                        <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                            <a>
                                <Text>{post.title}</Text>
                            </a>
                        </Link>
                        {/* </Alert> */}
                    </Stack>
                ))}
            </Flex>
        </MainLayout>
    );
}

Posts.getInitialProps = async ({req}) => {
    if (!req) {
        return {posts: null}
    }
    const response = await fetch('http://localhost:4200/posts');
    const posts = await response.json();
    return {
        posts,
    };
};

// only for Server side requests
// export async function getServerSideProps({ req }) {
//     if (!req) {
//         return { posts: null };
//     }
//     const response = await fetch('http://localhost:4200/posts');
//     const posts = await response.json();
//     return { props: { posts } };
// }
