import * as React from "react"
import { useRef } from 'react'
import App from '../App'
import { Container, Heading, Box, Text, chakra, Image, Flex, HStack, VStack, Link, Icon, shouldForwardProp  } from "@chakra-ui/react"
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CgArrowLongDown } from "react-icons/cg";
import { motion, isValidMotionProp, useScroll, useTransform } from 'framer-motion';
import tcSlide from '../images/tcSlide.png';
import abstract from '../images/abstract.png';
import myPhoto from '../images/myphoto.png';
import myPhoto2 from '../images/myphoto2.jpg';
import genvid from '../images/genvid.png';
import clash from '../images/clash.png';
import Footer from "../components/footer";
import AniLink from "gatsby-plugin-transition-link/AniLink"


const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

// const typeBox = styled.div`

// `bg='#f7f7f7'

const IndexPage = () => {
  const container = useRef(null);
  const paragraph = 'Full Stack Developer specializing in bringing websites and designs from conceptial to established. Crafting Sophisticated and modern designs to bring a unique User Experience. \n\n Exploring "How culture affects technology" as a developer, currently bringing international and indiviulaised UX experiences.'
  const words = paragraph.split(" ")
const { scrollYProgress } = useScroll({

  target: container,

  offset: ["start 0.9", "start 0.25"]

})


  return (
    <App >
      <Container maxW='container.3xl'  minH='90svh' centerContent display='flex' px={{base:'2rem', "2xl":'14rem'}}  letterSpacing='0px' py={{base: '4rem', lg:'2rem'}} pos='relative' color='black'>
        <Box position='relative' w='100%'>
        {/* <Image src={myPhoto2}  w={400} h={500} pos='absolute'  m='auto' left={'2%'} top={1} zIndex={-10}/> */}
          <Heading as='h5' fontSize={{ base: "11vw", '2xl': "150px" }} textTransform='uppercase' letterSpacing='0px' fontWeight='500' w='100%' lineHeight='0.92'>
            <Flex justifyContent='center' textAlign='center'><Image  src={myPhoto} w='0.75em' h='0.75em' bg='gray.400' borderRadius='50%'  m='auto 0'  />Keyaria W</Flex>
            <Flex >FullStack</Flex>
            <Flex justifyContent='center' textAlign='center' >Developer<Image src={abstract}  w='1em' h='1em'  borderRadius='20%'  m='auto 0 auto 1rem'/></Flex>
          </Heading>
          <Text as='h6' letterSpacing='0.07em' textTransform='uppercase' textAlign='center' fontSize='1.2rem' >Specialized in FrontEnd Development, Web Design and UX / UI Design</Text>
          <Text position={{base: 'relative', lg:'absolute' }} top={{base: '10', lg:'180px'}} right={{base: '0', lg:'50px'}} maxW={{base: '100%', lg:'350px'}} fontSize='14px' textTransform='uppercase' textIndent={{base: 0, lg:'4em'}} lineHeight='1.5' textAlign={{base: 'center', lg: 'none'}} margin={{base: 'auto', lg: 'none'}}> Working for 4+ years to bring exciting and modern websites for companies. Lets work together to bring together the best solution. </Text>
        </Box>
        <Box position='absolute' bottom='70px' left='0' fontSize='20px'>
       
          <VStack mx='2rem'>
            <Link href='https://www.linkedin.com/in/keyaria-walker-90749b106/' border='solid 1px' borderRadius='50%' display='flex' w='30px' h='30px' alignItems='center' justifyContent='center' _hover={{bg: 'black', color: 'white'}}><Icon as={CiLinkedin} /></Link>
            <Link href='https://github.com/keyaria' border='solid 1px' borderRadius='50%' display='flex' w='30px' h='30px' alignItems='center' justifyContent='center' _hover={{bg: 'black', color: 'white'}}><Icon as={FaGithub} /></Link>
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
        }} position='absolute' bottom='70px' right='0' textAlign='right' mx='2rem' fontSize='54px'>
            <Icon as={CgArrowLongDown}/>
          </ChakraBox>
      </Container>

  {/* About Section */}
      <Box id='about' w='100%' display='block' pos='relative' backgroundAttachment='fixed' backgroundRepeat='no-repeat' backgroundPosition='center center' backgroundSize='cover' py='5rem'>
        <Box w="100%" pos='absolute' top='0' left='0' pt='15%' overflow='hidden' bg='#fff' _before={{content: '""', pos:'absolute', top:0, left: '50%', transform: 'translateX(-50%)', w: '160%', h:'520%', bg:'black', borderRadius:'100%'}}/>
              
        <Container px={{base: '3rem', lg:'10em'}}  pos='relative'  maxW='100%' color='#fff' mt={{base: '-10px', lg:'120px'}} pb='5rem' bg='black'>
            <Text as={motion.p}  ref={container} display='flex'  color='gray.300' fontSize={{ base: "5vw", 'lg': "35px" }} letterSpacing='0.3rem' lineHeight='3rem' py='2rem'   maxW='1280px' flexWrap={'wrap'}   >
               {/* <chakra.span ml='50px'> */}
                {words.map( (word, i) => {

const start = i / words.length

const end = start + (1 / words.length)

return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word }</Word>

})}
 {/* </chakra.span> */}
                <br />
                <br />
            </Text>
            <Heading as='h5' py='5rem' fontSize={`calc(clamp(3.25em, 5vw, 4.5em) * .75)`} fontWeight='450'> My Process</Heading>
            <HStack w={`calc('100%' + calc(clamp('2.5rem', '8vw', '8em') / 1.5))`} m={`calc(clamp('2.5rem', '8vw', '8em') / -1.5)`} flexDir={{base: 'column', lg:'row'}}>
              {speciliaties.map((i => {
                return (
                  <Box 
                  _first={{ paddingLeft: 0 }}
                  paddingLeft={{base: 0, lg: `calc(7vw / 1.5)`}}>

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
          <Box px={{base:'8rem', "2xl":'14rem'}} id='works' >
            <Heading as='h2' textAlign='left' mb='100px' fontSize='9vw' fontWeight='500' textTransform='uppercase' w='70%' lineHeight='8rem'>Featured <Box textAlign='right'>Works</Box></Heading>
            
          </Box>

          <Flex flexDir={{base: 'row', md:'column'}} w="100%">
  <Flex p='0 1.6rem 0 1.6rem' w='100%'>
      <Flex w={`calc(100% / 12 * 6)`} flex='0 0 auto' flexBasis={`calc(100% / 12 * 6)`} flexDir='column' p='0 8px'> 

      <Flex justifyContent='space-between' justifyItems='end' mb='5px' borderBottom='1px solid black'>
        <Text fontSize='large'>Selected Work</Text>
      

      </Flex>
      
      <AniLink paintDrip to="/genvid" color="black">
      {/* <Link href='/genvid'> */}
      <Image class="sp-thumbnail" src={genvid} width="1200" height="675px" alt="Genvid"/>

      <Flex justifyContent='space-between' alignItems='end' py='8px' borderBottom='1px solid black'>
        <Text fontSize='large'>Genvid Entertainment</Text>
        <Text fontSize='smaller'>Front End Development</Text>
      

      </Flex>
      {/* </Link> */}
      </AniLink>
      </Flex>
      <Flex w={`calc(100% / 12 * 6)`} flex='0 0 auto' flexBasis={`calc(100% / 12 * 6)`}  flexDir='column' p='0 8px'>
      <Flex justifyContent='space-between' alignItems='end' mb='5px' borderBottom='1px solid black'>
        <Text fontSize='large'>Selected Work</Text>
      

      </Flex>
      <AniLink paintDrip to="/clash" color="black">

      <Image class="sp-thumbnail" src={clash} width="1200"  alt="Clash app"/>

      <Flex justifyContent='space-between' alignItems='end' py='8px' borderBottom='1px solid black'>
        <Text fontSize='large'>Clash App</Text>
        <Text fontSize='smaller'>Front End Development</Text>
      

      </Flex>
      </AniLink>
      </Flex>
  </Flex>
  {/* <Flex p='0 1.6rem 0 1.6rem' w='100%' pt='2rem'>
      <Flex w={`calc(100% / 12 * 6)`} flex='0 0 auto' flexBasis={`calc(100% / 12 * 6)`} flexDir='column' pb='0 6px'> 

      <img class="sp-thumbnail" src="https://www.paix-design.com/wp-content/uploads/2023/12/mm-cover.jpg" width="1200" height="675" alt="Nueva.Tech"></img>

      <Flex justifyContent='space-between' alignItems='end' pt='5px' borderBottom='1px solid black'>
        <Text fontSize='large'>Nueva Rect</Text>
        <Text fontSize='smaller'>Front End Development</Text>
      

      </Flex>
      </Flex>
      <Flex w={`calc(100% / 12 * 6)`} flex='0 0 auto' flexBasis={`calc(100% / 12 * 6)`}  flexDir='column' p='0 6px'>

      <img class="sp-thumbnail" src="https://www.paix-design.com/wp-content/uploads/2023/12/thealienist-cover.jpg" width="1200" height="675" alt="The Alienist S02"/>

      <Flex justifyContent='space-between' alignItems='end' pt='5px' borderBottom='1px solid black'>
        <Text fontSize='large'>Nueva Rect</Text>
        <Text fontSize='smaller'>Front End Development</Text>
      

      </Flex>
      </Flex>
  </Flex> */}
</Flex>


            
    <Flex  px='5em' pt='10em' flexDir='column' id='contact'>
    <Heading as='h2' textAlign='left' mb='100px' fontSize='9vw' fontWeight='500' textTransform='uppercase' w='70%' lineHeight='8rem'>Let's Work  <Box textAlign='right'>Together</Box></Heading>
    <Heading as='h2' textAlign='right' mb='100px' fontSize='4vw' fontWeight='500'  w='100%' >keymwz@gmail.com</Heading>

    </Flex>
            <Footer/>
    </App>
  )
}


const Word = ({children, progress, range}) => {

  const opacity = useTransform(progress, range, [0, 1])

  return (

    <chakra.span position='relative' mr='12px' mt='12px' color='white'>

      <chakra.span pos='absolute' opacity='20%'>{children}</chakra.span>

      <chakra.span as={motion.span} style={{opacity: opacity}}>{children}</chakra.span>

    </chakra.span>

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


