import PropTypes from "prop-types";
import React from "react";



function Layout({ children }) {
  return (
    <div className="flex flex-col font-display min-h-screen text-gray-900">


      <main className="flex flex-col flex-1 md:justify-center  w-full">
        {children}
      </main>

      <footer className="bg-gray-600">
        <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
          <p className="text-white">
            Created by{` `}
            <a
              className="font-bold no-underline text-white"
              href="https://keyaria.github.io"
            >
              Keyaria Walker
            </a>
          </p>

          <p>
            <a
              className="font-bold no-underline text-white p-2"
              href="https://github.com/keyaria"
            >
              GitHub
            </a>
            <a
              className="font-bold no-underline text-white p-2 "
              href="https://www.linkedin.com/in/keyaria-walker-90749b106/"
            >
              Linkedin
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
