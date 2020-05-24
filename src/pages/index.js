import React, { useRef } from "react";
import Header from "../components/header";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby" // to query for image data
import Img from "gatsby-image" // to take image data and render it
import aboutBackground from "../images/aboutBackground.png"
import background from "../static/Desktop2.png"
import coverpage from "../images/Coverpage.png"


 import Group from "../assets/group.svg"
//import Back from "../assets/img_back.svg"

import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { motion } from "framer-motion"


const Container = styled.section`
${tw`text-center
    justify-center
    mt-32

  `}



`;
const FlexContainer = tw.div`
  flex
  flex-wrap
`
const ImageContainer = tw.div`
  lg:w-1/2
  h-screen
  flex
  flex-wrap
`
const Heading = tw.h1`
  text-white
  inline-block
  my-8s
  p-3
`

const FullWidth = styled.div`
${tw`bg-no-repeat
  flex
  justify-center
  w-screen
  h-screen
  bg-cover
  bg-center
  rounded-b
  `}
 background-image: url(${background});

`

const AboutSection = styled.div`
${tw`
  p-16
  bg-cover
  bg-center


  `}

background-image: url(${aboutBackground});
/* height: 60vh */
`;

const AboutHeader = tw.h2`

  text-5xl

`
const AboutText = tw.p`

  lg:w-1/2
  leading-10
  text-xl
  p-10
`

const PortfolioSection = styled.div`
${tw`bg-white
  p-16
  sm:h-screen
  h-auto

  `}

/* height: 60vh */
`

const Link = styled.a`
  /* background-image: url(${coverpage}); */
`
function IndexPage() {
  // const [elementTop, setElementTop] = useState(0);
// const ref = useRef(null);
const portfolioRef = useRef(null);
const aboutRef= useRef(null);
// const { scrollY } = useViewportScroll();

// const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, -1], {
//    clamp: false
//  });


 const data = useStaticQuery(graphql`
   query {
  tcSlideImg: file(relativePath: { eq: "tcSlide.png" }) {
    childImageSharp {
               fluid {
        base64
        aspectRatio
        src
        srcSet
        sizes
      }
    }
  }
  cflcImg: file(relativePath: { eq: "CFLC.png" }) {
    childImageSharp {
               fluid {
        base64
        aspectRatio
        src
        srcSet
        sizes
      }
    }
  }
  libImg: file(relativePath: { eq: "lib.png" }) {
    childImageSharp {
               fluid {
        base64
        aspectRatio
        src
        srcSet
        sizes
      }
    }
  }
  cdImg: file(relativePath: { eq: "other.png" }) {
    childImageSharp {
              fluid {
        base64
        aspectRatio
        src
        srcSet
        sizes
      }
    }
  }
  sImg: file(relativePath: { eq: "Desktop@2x.png" }) {
    childImageSharp {
              fluid {
        base64
        aspectRatio
        src
        srcSet
        sizes
      }
    }
  }
}
 `)

  return (

    <Layout>
    <Header aboutRef={aboutRef} portfolioRef={portfolioRef}/>
    <FullWidth>

      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />



      <Container>
        <Heading style={{fontSize: '6em'}}>
          I&#39;m Keyaria Walker
        </Heading>

        <motion.p  className="text-lg leading-loose text-white" >
        And I am a Full Stack Developer

        </motion.p>

      </Container>
    </FullWidth>
      <AboutSection >
        <AboutHeader  ref={aboutRef}>
        About Me
        <svg height="10" width="100">
         <line x1="0" y1="0" x2="60" y2="0" style={{stroke:`rgb(85,60,154)`, strokeWidth:`4`, strokeLinecap: `round`}} />
        </svg>
        </AboutHeader>
        <FlexContainer>

        <AboutText>
          I am currently based in Tokyo, Japan as a FrontEnd Developer. <br/> <br />I studied UX/UI
          Design and Japanese in college. From a small village in northern India
          to a small pottery town in southern Japan, I have been able to help
          create technology that can be used in different enviroments.
          <br /> <br />
           I love picking
          up new hobbies and I am now doing kathak dancing and Brazialian Jiu Jutsu.

        </AboutText>
        <ImageContainer>
        <Group className=" float-right"/>

        </ImageContainer>
        </FlexContainer>
      </AboutSection>


<PortfolioSection style={{height: `1100px`}} ref={portfolioRef}>
<AboutHeader>
  Portfolio

</AboutHeader>
<svg height="10" width="100">
 <line x1="0" y1="0" x2="60" y2="0" style={{stroke:`rgb(85,60,154)`, strokeWidth:`4`, strokeLinecap: `round`}} />
</svg>
  <div className="container mx-auto p-8">
  <div className="flex flex-row flex-wrap -mx-2">
    <div className="w-full sm:w-1/2 md:w-1/2 h-64 md:h-auto mb-4 px-2">
      <Link className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" href="/currentProject" title="Link">
      <Img fluid={data.tcSlideImg.childImageSharp.fluid}/>
      </Link>
    </div>
    <div className="w-full md:w-1/2 mb-4 px-2 ">
      <div className="flex flex-col sm:flex-row md:flex-col -mx-2">
        <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 mb-8 sm:mb-4 md:mb-8">
          <Link className="block w-full h-full bg-no-repeat bg-center bg-cover" href="/clfc" title="Link" >
            <Img fluid={data.cflcImg.childImageSharp.fluid}/>
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 mb-8 sm:mb-0 md:mb-8 ">
          <Link className="block w-full h-full bg-no-repeat bg-center bg-cover" href="/library" title="Link">
          <Img fluid={data.libImg.childImageSharp.fluid}  />
          </Link>
        </div>
      </div>
    </div>
    <div className="w-full sm:mb-0 bg-gray-300 mb-4">
      <Link className="block w-full h-full bg-no-repeat bg-center bg-cover" href="/other" title="Link" >
        <Img fluid={data.cdImg.childImageSharp.fluid} />

      </Link>
    </div>

  </div>
</div>

</PortfolioSection>

    </Layout>


  );
}

export default IndexPage;
