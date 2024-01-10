import * as React from "react"
import clash from '../images/clash.png';
import { Container, Heading, Box, Text, chakra, Image, Flex, HStack, Grid, VStack, Link, Icon, shouldForwardProp  } from "@chakra-ui/react"
import App from '../App'
import Footer from "../components/footer";
import tsImg from "../images/typescript.svg";
import angularImg from '../images/angular.png';
import firebaseImg from '../images/firebase.png';

const ClashPage = () => {
    const speciliaties = [{
        num: 'Role / Services',
        name: 'Frontend Development and Design',
      },
      {
        num: 'Location',
        name: 'Japan / USA',
      },
      {
        num: 'Year',
        name: '2021 - 2022',
      }]
      
      

    return (
        <App >
            <Flex w="100%" h='90vsh' px='5em' flexDirection='column'>
            <Heading as='h2' textAlign='left' mb='50px' fontSize='9vw' fontWeight='500' textTransform='uppercase' w='90%' lineHeight='8rem'>Clash<Box textAlign='right'>Application</Box></Heading>
            <HStack w={`calc('100%' + calc(clamp('2.5rem', '8vw', '8em') / 1.5))`} py={`calc(clamp('2.5rem', '8vw', '8em') / 2 )`}>
              {speciliaties.map((i => {
                return (
                  <Box css={{
                    paddingLeft: i.num !== 'Role / Services' ? `calc(7vw / 1.5)` : 0
                  }} w={`33.333%`} pb='2rem'>
                  <Heading as='h5' fontSize='0.8rem' mb='1.8rem' color='gray.400'>{i.num}</Heading>
                  <Box mb='1.5rem' h='1px' w='100%' bg='gray.300'/>
                  <Heading as='h6' fontWeight='450' fontSize={`clamp(1.2em, 1vw, 2.5em)`} lineHeight='1.45'>{i.name}</Heading>

                </Box>
                )
              }))}
            </HStack>
                <Image src={clash} w='100%' h="35%" mt='2rem' backgroundSize='contain' borderRadius={'2%'}/>

                {/* <Flex backgroundImage= {`url(${genvid})`} w="100%" h="60%" backgroundSize={'cover'}>
                    <Heading color='white'>Genvid</Heading>
                </Flex> */}
         
            </Flex>
            <Grid w='100%' gap={'32px'} gridAutoRows={'min-content'} gridTemplateColumns={{base: 'none', md:`repeat(8, minmax(1px, 1fr))`}} gridTemplateRows={`repeat(1, min-content)`} px='5rem' py='5rem'>
                <Flex alignItems={'center'} placeSelf={'start'} gridColumn={'auto / span 4'} w='100%'>
                    <Box w='10px' h='10px' bg='black' mr='5px' borderRadius={'50%'}></Box>
                    <Text> 01 / Brief</Text>
                </Flex>
                <VStack w='100%'  gridColumn={'auto / span 4'} alignItems={'left'}>
                    <Heading as='h5'gap={'32px'}>Front End Development at Clash</Heading>
                    <p> Genvid Brings Live Interactions to players on their favorite game or series. The first major launch was for Silent Hill: Ascesion</p>
                </VStack>
            </Grid>
            <Grid w='100%' gap={'32px'} gridAutoRows={'min-content'} gridTemplateColumns={{base: 'none', md:`repeat(8, minmax(1px, 1fr))`}} gridTemplateRows={`repeat(1, min-content)`} px='5rem' py='5rem'>
                <Flex alignItems={'center'} placeSelf={'start'} gridColumn={'auto / span 4'} w='100%'>
                    <Box w='10px' h='10px' bg='black' mr='5px' borderRadius={'50%'}></Box>
                    <Text> 02 / Work Done</Text>
                </Flex>
                <VStack w='100%'  gridColumn={'auto / span 4'} alignItems={'left'}>
                    <Heading as='h5' gap={'32px'}>Site and Dashboard Design</Heading>
                    <p> Designed and implemented Library in React and Javascript for Games to login and interact with store payments which can be used for any Genvid game.
                    Implemented Payments on Mobile using Kotlin and Swift to build a cross platform payment system for Genvid Games.  </p>
                </VStack>
            </Grid>
            <Grid w='100%' gap={'32px'} gridAutoRows={'min-content'} gridTemplateColumns={{base: 'none', md:`repeat(8, minmax(1px, 1fr))`}} gridTemplateRows={`repeat(1, min-content)`} px='5rem' py='5rem'>
                <Flex alignItems={'center'} placeSelf={'start'} gridColumn={'auto / span 4'} w='100%'>
                    <Box w='10px' h='10px' bg='black' mr='5px' borderRadius={'50%'}></Box>
                    <Text> 03 / Technology</Text>
                </Flex>
                <HStack w='100%'  gridColumn={'auto / span 4'} alignItems={'left'}>
                    <Image src={angularImg} w='50px' h='50px'/>

                    <Image src={tsImg} w='50px' h='50px'/>
                    <Image src={firebaseImg} w='50px' h='50px'/>

                </HStack>
            </Grid>
            <Footer />
        </App>
    )
}


export default ClashPage
