import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import tw from "tailwind.macro";

const Nav = tw.header`
  bg-none
  sticky
  top-0
  text-white
  z-50
  absolute
`

 // eslint-disable-next-line
function Header(ref) {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const onClick = (link) => {
  if (link === 'ABOUT' && ref.aboutRef) {
    window.scrollTo({
       // eslint-disable-next-line
      top: ref.aboutRef.current.offsetTop,
      behavior: 'smooth',
    });
  }
  if(ref && link === 'PORTFOLIO' ){
    window.scrollTo({
       // eslint-disable-next-line
      top: ref.portfolioRef.current.offsetTop,
      behavior: 'smooth',
    });
  }
}

  return (
    <Nav>
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-4">
        <Link className="flex items-center no-underline" to="/">

          <span className="font-bold text-xl tracking-tight">
            {site.siteMetadata.title}
          </span>
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >

          {[
            {
              route: `/`,
              title: `HOME`
            },
            {
              route: `/`,
              title: `ABOUT`
            },
            {
              route: `/portfolio`,
              title: `PORTFOLIO`
            }
          ].map(link => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline"
              key={link.title}
              onClick={() => onClick(link.title)}

            >
              {link.title}
            </Link>

          ))}
          <a
            className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline"
            href="Walker_Resume.pdf"
          >
            RESUME
          </a>

        </nav>
      </div>
    </Nav>
  );
}

export default Header;
