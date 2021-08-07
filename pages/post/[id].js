import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Center, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import { Alert, AlertIcon, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MainLayout } from '../../components/MainLayout';

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
             <Link href={'/posts'}><a>
            <Center>               
            <Button            
                colorScheme="twitter"
                size='xs'
                variant='solid'                
                rightIcon={<ArrowForwardIcon />}
            >
                Back
            </Button></Center></a></Link>
        </MainLayout>
        
    );
}

Post.getInitialProps = async (ctx) => {
    const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
    const post = await response.json();
    return {
        post,
    };
};
