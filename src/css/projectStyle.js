import styled from "@emotion/styled"

import tw from "tailwind.macro"

export const Heading = tw.h1`

  font-bold
  text-white
  text-center
  text-5xl
  mt-8


`

export const H3 = tw.h3`
  font-bold
`;

export const SideBySide = tw.div`
  sm:w-full
  md:w-1/2
  my-10

`;

export const MainContainer = tw.div`
  leading-10
  flex
  flex-col
  mx-24
  my-10

`;
export const SideContainer = tw.div`

  flex-row
  flex-wrap
  inline-flex


`;

export const Button = tw.button`

  hover:bg-gray-100
  hover:text-purple-400
  bg-purple-400
  text-white
  font-semibold
  py-2
  px-4
  border
  border-purple-400
  rounded
  shadow
  m-2

`


export const Content = tw.div`
hidden
 absolute

`;
export const Card = styled.div`
${tw`  bg-red-400
  h-56
  rounded
  hover:shadow-lg
`}

  &:hover {
    ${Content}{
      ${tw` block`}
    }
  }



`

export const List = styled.ol`
  list-style: none;
  counter-reset: my-awesome-counter;

  & > li {
    counter-increment: my-awesome-counter;
    margin: 0.25rem;
  }
 & > li::before {
 content: counter(my-awesome-counter);
 /* background: #662974; */
 width: 2rem;
 height: 2rem;
 border-radius: 50%;
 border: solid 2px;
 display: inline-block;
 line-height: 1.5rem;
 text-align: center;
 margin-right: 0.5rem;
 ${tw`border-purple-200 text-purple-300`}
}
`;
