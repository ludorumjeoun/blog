import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

import dotDoge from "../images/dotdoge_v2.png";

function Header() {
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

  return (
    <header className="text-gray-500 bg-gray-100 shadow-sm py-2 sticky top-0 z-10">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto px-4">
        <Link className="" to="/">
          <h1 className="flex items-center no-underline py-1">
            <span className="text-base tracking-tight">
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link>
        <img
          alt="Cat and human sitting on a couch"
          className="inline rounded-full"
          style={{height:"2rem"}}
          src={dotDoge}
        /> 

        <button
          className="flex items-center block px-3 py-2 border rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
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
              route: `/blog`,
              title: `Blog`,
            },
            {
              route: `/about`,
              title: `About`,
            }
          ].map((link) => (
            <Link
              className="block mt-4 px-2 py-1 no-underline md:inline-block md:mt-0 md:ml-6 "
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
