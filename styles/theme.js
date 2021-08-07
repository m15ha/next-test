
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      'html, body, #__next': { height: '100%' },
    },
  },
  fonts: {
    heading: 'lato, sans-serif',
    body: 'lato, sans-serif',
  },
  colors: {
    primary: {
      300: '#707070',
      400: '#605F5F',
      500: '#464545',
    },
    secondary: {
      500: '#E50021',
    },
    table: {
      100: '#30475E09',
      500: '#30475E',
    },
  },
  components: {
    Button: {
      sizes: {
        xl: {
          h: 14,
          minW: 14,
          fontSize: 'xl',
          px: 8,
        },
      },
    },
    Tabs: {
      parts: ['tab'],
      variants: {
        enclosed: {
          tab: {
            _selected: {
              color: 'secondary.500',
              fontWeight: 'bold',
            },
          },
        },
      },
    },
  },
})

export default theme
