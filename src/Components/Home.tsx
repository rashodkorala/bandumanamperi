import React from "react";
import Contact from "./Contact";

import About from "./About";
import Work from "./Work";
import Footer from "./Footer";

type Props = {};

const Main = (props: Props) => {
  return (
    <div className="flex flex-col">
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default Main;
