import { Box, Flex } from '@chakra-ui/react';
import { Header } from './Header';
import { FC, ReactNode } from 'react';
import { Footer } from './Footer';
import Head from 'next/head';

export function MainLayout({ children, title = 'Next App' }) {
    return (
        <>
            <Box h='90vh'>
                <Head>
                    <title>{title}</title>
                </Head>

                <Flex minHeight='100%' direction='column'>
                    <Header />
                    <Box flex={1}>{children}</Box>
                </Flex>
                <Footer />
            </Box>
        </>
    );
}
