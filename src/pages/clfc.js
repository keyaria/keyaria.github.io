import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";
import SEO from "../components/seo";
import coverpage from "../images/Coverpage.png"

import {
  Heading,
  H3,
  Card,
  Button,
  List,
  SideBySide,
  SideContainer,
  MainContainer
} from "../css/projectStyle"


import background from "../images/TC.png"
import background1 from "../images/lib.png"
import background2 from "../images/other-square.png"


function ClfcPage() {
  return (
    <Layout className="bg-gray-300">

      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="CLFC Page"
      />

    <Header/>
      <div className="bg-purple-300 flex flex-wrap px-3" style={{height: '400px'}}>

      <div className="sm:w-full md:w-1/2  mt-8  p-3 text-center">
      <Heading >
        Community Family Life Center
      </Heading>
      <h2>  Non Profit Website </h2>
      <img src={coverpage} height="300" width="300" className="m-auto"/>
      </div>
      <p className="inline-flex p-2 self-center sm:w-full md:w-1/2">
        Providing services to the Yspsilanti, Michigan community with updates
        and information provided through the website
      </p>
      </div>


      <MainContainer>
        <SideContainer>
          <SideBySide>
            <h2 className ="text-xl font-semibold">PROJECT OVERVIEW</h2>
            <p  className="w-3/4 semibold leading-loose font-medium text-lg">
              There are many services, such as tutoring, that are provided by the Community Family Life Center(CLFC) which
              help improve the Yspilanti community.
              The CFLC website helps spread information about the different services provided
              and to encourage donations.
            </p>
          </SideBySide>
          <SideBySide className="border-l border-solid border-gray-200 p-4">
            <H3 className="flex-1 ">My Role</H3>
              <p>In a team of 4, I helped with user research and the design of the website.
              After, completion of design, I had the sole
              responsibility to code the website as the developer of the team.
              </p>
            <H3 className="flex-1">Skills Used</H3>
            <ul className="inline-flex p-2 self-center">
              <li><Button>React</Button></li>
              <li><Button>CSS in JSS </Button></li>
              <li><Button>HTML5 </Button></li>
              <li> <Button>UX/UI </Button></li>
            </ul>
            <H3 className="flex-1">Timeline</H3>
             <p>September 4 2019 - May 5 2020</p>
          </SideBySide>
        </SideContainer>
        <SideContainer>
          <SideBySide>
            <h2 className ="text-2xl font-semibold ">THE PROBLEM</h2>
          </SideBySide>
          <SideBySide>
              <H3>How can we let the community know about all the services provided? </H3>
              <p>Due to not having a website, CLFC&#39;s programs and services were made
              known by word of mouth. CLFC needed a way for not only members of the community
              but also possible doners and stackholders to find out about all the programs.
              </p>
          </SideBySide>

        </SideContainer>
        <SideContainer>
          <SideBySide>
            <h2 className ="text-2xl font-semibold ">THE SOLUTION</h2>
          </SideBySide>
          <SideBySide>
          <h3>Design and develop a full-scale functioning website for the organization that will help:</h3>
          <List>
          <li>Promote the organization’s events, resources, and services</li>
          <li>Attract organizational partners and donors</li>
          <li>Spread awareness of the organization to the wider Ypsilanti area</li>
          <li>Develop a website that is intuitive and easy to use, especially for those that have no prior web experience</li>
          <li>Integrate a CMS software to the website to allow for the organization members to easily update and maintain, in particular those without any programming experience</li>
          <li>Integrate all features and information into the website that the organization wishes to display</li>
          </List>
          </SideBySide>
        </SideContainer>

        <SideContainer>
          <SideBySide>
            <h2 className ="text-2xl font-semibold ">The Beginning - User Research</h2>
          </SideBySide>
          <SideBySide>
              In order to find out about the stackholders, My team and I conducted
              interviews and distributed surveys where we found that:
              <List>
                <li>Transportation was a big problem, so a calendar would help people find a way to the programs</li>
                <li>Most people used internet on a daily basis but found out about CFLC through word of mouth</li>
                <li>People wanted to become more active in the community, so the website needed to feel welcoming </li>
              </List>
              Through this we were able to create user personas, stories, and do a competitive anaylsis to determine
              the requirements of the site
          </SideBySide>

        </SideContainer>
        <SideContainer>
          <SideBySide>
            <h2 className ="text-2xl font-semibold ">DESIGN</h2>
          </SideBySide>
          <SideBySide>
              <H3>What are the needed pages?</H3>
              <p> Using results from our research pages we created a site map and lo-fi
              wireframes to begin to answer these UX requirements:
              </p>
              <H3>How can we design a website that encourages community member to visit?</H3>
                <p>With not even a logo to go off of, in this phrase we created a color story,
                did logo designing, and created mid-fi designs.
                </p>
          </SideBySide>

        </SideContainer>

        <SideContainer>
          <SideBySide>
            <h2 className ="text-2xl font-semibold ">FINAL DESIGN AND USER VALIDATION</h2>
          </SideBySide>
          <SideBySide>
              Using our mocked up designs with user interactions included we decided to conduct
              user testing on site to see if our website was usable. After conducting testing, we made
              high fidelity prototypes.
          </SideBySide>
        </SideContainer>
        <SideContainer>
          <SideBySide>
            <h2 className ="text-2xl font-semibold ">THE FINAL PRODUCT</h2>
          </SideBySide>
          <SideBySide>
              <H3>FrontEnd Development</H3>
                <p>Using our final prototype as a guide, I used React and Gatsby for
                rapid development of the frontend. </p>
              <H3>BackEnd Development</H3>
              <p>Due to our client&#39;s not having a developer, they needed a way to be
              able to edit and add photos and content easily. For this, I used Wordpress
              as a headless CMS allowing for me seperate the frontend and backend development easily.
              </p>
          </SideBySide>

        </SideContainer>

        <div className="flex flex-row flex-wrap">
          <div className="w-full "><h2 className =" text-2xl font-semibold flex-1">OTHER PROJECTS</h2>

        <div className="grid grid-flow-col md:grid-cols-3 grid-rows-3 md:grid-rows-1 gap-4 my-4">

            <a href="/currentProject"><Card href="/clfc" style={{backgroundImage: `url(${background})`,  backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}></Card></a>
    <a href="/library"><Card href="/clfc" style={{backgroundImage: `url(${background1})`,  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}></Card></a>
  <a href="/other"><Card href="/clfc" style={{backgroundImage: `url(${background2})`,  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}></Card></a>

        </div>
        </div>

        </div>
      </MainContainer>

    </Layout>
  );
}

export default ClfcPage;
