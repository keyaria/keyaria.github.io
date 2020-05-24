import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";
import SEO from "../components/seo";

 import background from "../images/cflc_card.png"
 import background1 from "../images/lib.png"
 import background2 from "../images/other-square.png"

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


function CurrentProjectPage() {
  return (
    <Layout className="bg-gray-300">

      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Current Project"
      />

    <Header/>
      <div className="bg-purple-300 flex flex-wrap px-3" style={{height: '400px'}}>

      <div className="sm:w-full md:w-1/2   self-center text-center">
      <Heading >
        TableCheck
      </Heading>
      <h2>  Reservation Website </h2>
      </div>
      <p className="inline-flex p-2 self-center sm:w-full md:w-1/2">
        Bringing restaraunts and diners closer
      </p>
      </div>


      <MainContainer>
        <SideContainer>
          <SideBySide>
            <h2 className ="text-xl font-semibold">PROJECT OVERVIEW</h2>
            <p  className="w-3/4 semibold leading-loose font-medium text-lg">
              TableCheck provides restaraunts a one stop solution to manage bookings
              and provide insight regarding customers. TableCheck also gives diners
              the ability to search, reserve, and pre-pay restaraunt bookings.
            </p>
          </SideBySide>
          <SideBySide className="border-l border-solid border-gray-200 p-4">
            <H3 className="flex-1 ">My Role</H3>
              <p> Partcipated in the design and implementation of a survey feature for
              restaraunts. Currently helping in the redesign of reservation flow and pages.
              </p>
            <H3 className="flex-1">Skills Used</H3>
            <ul className="inline-flex p-2 self-center">
              <li><Button>React</Button></li>
              <li><Button>CSS in JSS </Button></li>
              <li><Button>HTML5 </Button></li>
              <li> <Button>UX/UI </Button></li>
            </ul>
            <H3 className="flex-1">Timeline</H3>
             <p>July 2019 - Current</p>
          </SideBySide>
        </SideContainer>
        <SideContainer>
          <SideBySide>
            <h2 className ="text-2xl font-semibold ">THE PROBLEM</h2>
          </SideBySide>
          <SideBySide>
              <H3>How can we improve and add features that will increase client satisfaction </H3>
              <p>
                Most of TableCheck&#39;s clients wish to have a one stop solution for most of their needs
                while giving diners a smooth experience from reservation to dining.
              </p>
          </SideBySide>

        </SideContainer>
        <SideContainer>
          <SideBySide>
            <h2 className ="text-2xl font-semibold ">THE SOLUTION</h2>
          </SideBySide>
          <SideBySide>
          <h3>Redesign TableCheck Website by:</h3>
          <List>
          <li>Adding a survey feature for restaraunts</li>
          <li>Update the reservation flow and design</li>
          <li>Creating User Personas and Journey Maps through user research</li>
          </List>
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

//
// For this project, I currently work as a developer on the frontend team where
// we are building and improving together a reservation system for the resaraunts as
// well as restaraunt clients. Starting out, I participated in the implementation
// of a survey feature where I helped design and implement using UX/UI design principles,
// React, Docker, and EmotionJS. Currently, I am working on the redesign and implementation
// of reservation forms.
export default CurrentProjectPage;
