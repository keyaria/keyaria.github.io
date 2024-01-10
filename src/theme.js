import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter';
import '@fontsource/roboto-condensed/300.css';
import '@fontsource/roboto-condensed/400.css';
import '@fontsource/roboto-condensed/700.css';
import './styles/styles.css'

const theme = extendTheme({
  fonts: {
    heading: `'ClashGrotesk-Variable', sans-serif`,
    body: `'Inter Variable', sans-serif`,
  },
})

export default theme