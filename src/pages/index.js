import * as React from "react"
import App from '../App'
import { Container, Heading, Box, Text, chakra, Image, Flex, VStack, Link, Icon, shouldForwardProp  } from "@chakra-ui/react"
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CgArrowLongDown } from "react-icons/cg";
import { motion, isValidMotionProp } from 'framer-motion';

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}
const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const IndexPage = () => {
  return (
    <App>
      <Container maxW='container.3xl'  minH='90svh' centerContent display='flex' px={{base:'8rem', "2xl":'14rem'}}  letterSpacing='0px' py='4rem'>
        <Box position='relative' w='100%'>
          <Heading as='h5' fontSize={{ base: "12vw", '2xl': "150px" }} textTransform='uppercase' letterSpacing='0px' fontWeight='500' w='100%' lineHeight='0.92'>
            <Flex justifyContent='center' textAlign='center'><Image w='0.75em' h='0.75em' bg='gray.400' borderRadius='50%'  m='auto 0'  />Keyaria W</Flex>
            <Flex pl='4rem'>Creative</Flex>
            <Flex justifyContent='center' textAlign='center' >Studio<Image  w='0.75em' h='0.75em' bg='gray.400' borderRadius='50%'  m='auto 0 auto 2rem'/></Flex>
          </Heading>
          <Text as='h6' letterSpacing='0.07em' textTransform='uppercase' textAlign='center' fontSize='1.2rem'>Specialized in Branding, Web Design and Photography</Text>
          <Text position={{base: 'relative', lg:'absolute' }} top='180px' right='50px' maxW='350px' fontSize='14px' textTransform='uppercase' textIndent='4em' lineHeight='1.5'> We are a full-service creative studio creating awesome digital experiences and solutions. Our mission is to make work process meaningful. </Text>
        </Box>
        <Box position='absolute' bottom='30px' left='0' fontSize='20px'>
       
          <VStack mx='2rem'>
            <Link border='solid 1px' borderRadius='50%' display='flex' w='30x' h='30px'><Icon as={CiLinkedin} /></Link>
            <Link><Icon as={FaGithub} /></Link>
          </VStack>
        </Box>
        <ChakraBox as={motion.div}   
 
          animate={{
           y : [-10,10],
          }}
         transition={{
          type: 'tween',
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }} position='absolute' bottom='30px' right='0' textAlign='right' mx='2rem' fontSize='54px'>
            <Icon as={CgArrowLongDown}/>
          </ChakraBox>
      </Container>
      
  {/* About Section */}

  {/* Works Section */}
    </App>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
