import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-200">
      <Header />
      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto mt-4 md:mb-8 md:px-8 md:py-8">
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
