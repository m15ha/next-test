import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Center, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import { Alert, AlertIcon, Button } from '@chakra-ui/react';
import { NextPageContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MainLayout } from '../../components/MainLayout';
import { MyPost } from '../../interfaces/post';


export default function Post({ post }) {
    const router = useRouter();
    return (
        <MainLayout title={'Post'}>
            <Flex direction='column' p={12} rounded={6}>
                <Stack spacing={3}>
                    <Alert status='success'>
                        <AlertIcon />
                        <Text>{post.title}</Text>
                    </Alert>
                    <Alert status='error'>{post.post}</Alert>
                </Stack>
            </Flex>
            <Link href={'/posts'}>
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
    quesry: {
        id: string;
    };
}

Post.getInitialProps = async (ctx: NextPageContext) => {
    const response = await fetch(`${process.env.API_URL}/posts/${ctx.query.id}`);
    const post: MyPost = await response.json();
    return {
        post,
    };
};
