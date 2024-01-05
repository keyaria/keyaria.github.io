import {
    ChakraProvider,
  } from '@chakra-ui/react'
  import Fonts from './font'
  import theme from './theme'
  import * as React from "react"
  import NavBar from './components/navBar' 

 const App = ({children}) => (
    <ChakraProvider theme={theme}>
      <Fonts />
      <NavBar />
      <main>
      {children}
      </main>
    </ChakraProvider>
  )

  export default App