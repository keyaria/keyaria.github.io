import {
    ChakraProvider,
    Box
  } from '@chakra-ui/react'
  import Fonts from './font'
  import theme from './theme'
  import * as React from "react"
  import NavBar from './components/navBar' 
  import './styles/styles.css'
// bg='#d0d0d0'
 const App = ({children}) => (
    <ChakraProvider theme={theme}>
    
      <Fonts />
      <Box >
      <NavBar />
      <main>
      {children}
      </main>
      </Box>
    </ChakraProvider>
  )

  export default App