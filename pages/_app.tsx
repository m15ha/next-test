import { ChakraProvider } from '@chakra-ui/react';
import NextNprogress from 'nextjs-progressbar';
import '../styles/globals.css'

function App({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <NextNprogress
                color='#29D'
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
            />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default App;
