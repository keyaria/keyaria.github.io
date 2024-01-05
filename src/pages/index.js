import * as React from "react"
import { useRef } from 'react'
import App from '../App'
import { Container, Heading, Box, Text, chakra, Image, Flex, HStack, VStack, Link, Icon, shouldForwardProp  } from "@chakra-ui/react"
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CgArrowLongDown } from "react-icons/cg";
import { motion, isValidMotionProp, useScroll } from 'framer-motion';

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

// const typeBox = styled.div`

// `

const IndexPage = () => {
  const container = useRef(null);

const { scrollYProgress } = useScroll({

  target: container,

  offset: ["start 0.9", "start 0.25"]

})
  return (
    <App>
      <Container maxW='container.3xl'  minH='90svh' centerContent display='flex' px={{base:'8rem', "2xl":'14rem'}}  letterSpacing='0px' py='4rem' pos='relative'>
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
            <Link border='solid 1px' borderRadius='50%' display='flex' w='30px' h='30px' alignItems='center' justifyContent='center'><Icon as={CiLinkedin} /></Link>
            <Link><Icon as={FaGithub} /></Link>
          </VStack>
        </Box>
        <ChakraBox as={motion.div}   
 
          animate={{
           y : [-10,10],
          }}
         transition={{
          type: 'tween',
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }} position='absolute' bottom='30px' right='0' textAlign='right' mx='2rem' fontSize='54px'>
            <Icon as={CgArrowLongDown}/>
          </ChakraBox>
      </Container>

  {/* About Section */}
      <Box w='100%' display='block' pos='relative' backgroundAttachment='fixed' backgroundRepeat='no-repeat' backgroundPosition='center center' backgroundSize='cover' py='5rem'>
        <Box w="100%" pos='absolute' top='0' left='0' pt='15%' overflow='hidden' bg='#fff' _before={{content: '""', pos:'absolute', top:0, left: '50%', transform: 'translateX(-50%)', w: '160%', h:'520%', bg:'gray.900', borderRadius:'100%'}}/>
              
        <Container px='10em' pos='relative'  maxW='100em' color='#fff' mt='120px' pb='5rem' bg='gray.900'>
            <Text as={motion.p}  ref={container}  color='gray.300' fontSize='35px' letterSpacing='0.3rem' lineHeight='3rem' py='2rem'       style={{opacity: scrollYProgress}}>
               <chakra.span ml='50px'>Full </chakra.span>Stack Developer specializing in bringing websites and designs from conceptial to established. Crafting Sophisticated and modern designs to bring a unique User Experience.
                <br />
                <br />
                <chakra.span ml='50px'>Exploring</chakra.span> "How culture affects technology" as a developer, currently bringing international and indiviulaised UX experiences.
            </Text>
            <Heading as='h5' py='5rem' fontSize={`calc(clamp(3.25em, 5vw, 4.5em) * .75)`} fontWeight='450'> My Process</Heading>
            <HStack w={`calc('100%' + calc(clamp('2.5rem', '8vw', '8em') / 1.5))`} m={`calc(clamp('2.5rem', '8vw', '8em') / -1.5)`}>
              {speciliaties.map((i => {
                return (
                  <Box css={{
                    paddingLeft: i.num !== '01' ? `calc(7vw / 1.5)` : 0
                  }}>
                  <Heading as='h5' fontSize='0.8rem' mb='1.8rem' color='gray.300'>{i.num}</Heading>
                  <Box mb='2rem' h='1px' w='100%' bg='gray.300'/>
                  <Heading as='h4' fontWeight='450' fontSize={`clamp(1.55em, 2.3vw, 2.5em)`} lineHeight='1.45'>{i.name}</Heading>
                   <Text pt='2rem' lineHeight='1.66'>{i.text}</Text>

                </Box>
                )
              }))}
            </HStack>
          </Container>
      </Box>
  {/* Works Section */}
          <Box px={{base:'8rem', "2xl":'14rem'}}>
            <Heading as='h2' textAlign='left' mb='120px' fontSize='9vw' fontWeight='300' textTransform='uppercase' w='70%' lineHeight='8rem'>Featured <Box textAlign='right'>Works</Box></Heading>
            
            <Flex w='100%' h='100vh' flexWrap='wrap'>
              <Box w='50%' h='50%' bg='black'></Box>
              <Box w='50%' h='70%' bg='blue'></Box>
              
              <Box w='50%' h='70%' bg='blue'></Box>
              <Box w='50%' h='50%' bg='black'></Box>
            </Flex>

   
          </Box>
          {/* <Flex w='100%' h='200vh' flexWrap='wrap' p='2em' justifyContent='space-between' pos='relative' >
              <Box w='49%' h='50%' bg='gray.200' borderRadius='20px' mt='30%'></Box>
              <Box w='49%' h='50%' bg='gray.200' borderRadius='20px'></Box>
              
            </Flex> */}
    </App>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
const speciliaties = [{
  num: '01',
  name: 'Design',
  text: 'With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs. Solid company branding is the foundation of any succesful website.'
},
{
  num: '02',
  name: 'Development',
  text: 'With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs. Solid company branding is the foundation of any succesful website.'
},
{
  num: '03',
  name: 'Testing',
  text: 'With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs. Solid company branding is the foundation of any succesful website.'
}]