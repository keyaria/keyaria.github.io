
import * as React from 'react';
import{ Flex, Box, Text, HStack, Link, Button} from '@chakra-ui/react'

const Footer = () => {
    const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

    return (

        <Flex w='100%' h='30vh' bg='#1C1D20' color='white'  flexDir='column'>
        <Flex  w='100%' py='2rem' justifyContent='space-evenly'><Text>© Keyaria Walker 2023. </Text> <HStack><Link href='https://github.com/keyaria'><Text>GitHub</Text></Link><Link href='https://www.linkedin.com/in/keyaria-walker-90749b106/'><Text>Linkedin</Text></Link><Text>Resume</Text></HStack> <Box><Button onClick={backToTop}>Back to the Top</Button></Box></Flex>
       <Box m='0 auto' textAlign='center'><Text>Created With Love </Text><Text color='gray.500'>Made With Gatsbyjs</Text></Box> 
  </Flex>
    )
}

export default Footer;