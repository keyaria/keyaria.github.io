import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";
import SEO from "../components/seo";

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

import background from "../images/cflc_card.png"
import background1 from "../images/lib.png"
import background2 from "../images/TC.png"

function OtherPage() {
  return (
    <Layout className="bg-gray-300">

      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Other Projects Page"
      />

    <Header/>
      <div className="bg-purple-300 flex flex-wrap px-3" style={{height: '400px'}}>

      <div className="sm:w-full md:w-1/2  self-center text-center">
      <Heading >
        Other Projects
      </Heading>
      <h2>  Added feature and website </h2>
      </div>
      <p className="inline-flex p-2 self-center sm:w-full md:w-1/2">
        Providing services to the Yspsilanti, Michigan community with updates
        and information provided through the website
      </p>
      </div>


      <MainContainer>
        <SideContainer>
          <SideBySide>
            <h2 className ="text-xl font-semibold">BDETROIT</h2>
            <p  className="w-3/4 semibold leading-loose font-medium text-lg">
              In my Interaction Design Studio class we designed a solution
              to help small buisnesses in Detroit collaborate and communicate with
              each other.
            </p>
          </SideBySide>
          <SideBySide className="border-l border-solid border-gray-200 p-4">
            <H3 className="flex-1 ">My Role</H3>
              <p>In a group of 4, I proposed the intial concept and then worked on
              all research, wireframes and the final high fidelty prototype. The concept was that many small buisnesses
              in Detroit use platforms like Facebook, and word of mouth to discuss and communicate bacause
              there is no once place that they can get all the information they need and colloborate. Due to this,
              we decided an app could help aggreate news and help collaboration.
              Step Taken:
              <List>
              <li>Created personas and scenarios</li>
              <li>Implemented a design space analysis</li>
              <li>Sketched concept ideas for application</li>
              <li>Completed a paper prototype</li>
              <li>Went through multiple interations of the digitial prototype working in Figma and InVision</li>
              </List>
              </p>
            <H3 className="flex-1">Skills Used</H3>
            <ul className="inline-flex p-2 self-center">
              <li><Button>User Research</Button></li>
              <li><Button>UX/UI Design</Button></li>
            </ul>
            <H3 className="flex-1">Timeline</H3>
             <p>September 2018 - December 2018</p>
          </SideBySide>
        </SideContainer>
        <SideContainer>
          <SideBySide>
            <h2 className ="text-2xl font-semibold ">DARK ENERGY PROJECT</h2>
          </SideBySide>
          <SideBySide>
              <H3>How can different members of the team obtain the correct data and information?</H3>
              <p>I participated in the Undergradute Research Opportunity Project(UROP)
                where my research was on creating a web application that allowed
                for people to log in and then enter and retrieve data from a database.
              Step Taken:
              <List>
              <li>Created the design and layout of the application</li>
              <li>Set up the backend using PHP and MYSQL</li>
              <li>Set up and completed testing</li>
              <li>Presented Research at UROP presentation day</li>
              </List>
              </p>
            <H3 className="flex-1">Skills Used</H3>
            <ul className="inline-flex p-2 self-center">
              <li><Button>MySQL</Button></li>
              <li><Button>PHP</Button></li>
              <li><Button>HTML</Button></li>
              <li><Button>CSS</Button></li>
            </ul>
            <H3 className="flex-1">Timeline</H3>
             <p>October 2016 - April 2017</p>
          </SideBySide>

        </SideContainer>
        <SideContainer>
          <SideBySide>
            <h2 className ="text-2xl font-semibold ">ANKURI</h2>
          </SideBySide>
          <SideBySide>
          <p>Helped update and maintain Ankuri&apos;s sites. Most of the work was helping update the products area.</p>
          <ul className="inline-flex p-2 self-center">
            <li><Button>HTML</Button></li>
            <li><Button>CSS</Button></li>
            <li><Button>MYSQL</Button></li>

          </ul>
          </SideBySide>
        </SideContainer>



        <div className="flex flex-row flex-wrap">
          <div className="w-full "><h2 className =" text-2xl font-semibold flex-1">OTHER PROJECTS</h2>

        <div className="grid grid-flow-col md:grid-cols-3 grid-rows-3 md:grid-rows-1 gap-4 my-4">

            <a href="/clfc"><Card href="/clfc" style={{backgroundImage: `url(${background})`,  backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}></Card></a>
    <a href="/library"><Card href="/clfc" style={{backgroundImage: `url(${background1})`,  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}></Card></a>
  <a href="/currentProject"><Card href="/clfc" style={{backgroundImage: `url(${background2})`,  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}></Card></a>

        </div>
        </div>

        </div>
      </MainContainer>

    </Layout>
  );
}

export default OtherPage;
