import React from "react";
import Contact from "./Contact";

import About from "./About";
import Work from "./Work";

type Props = {};

const Main = (props: Props) => {
  return (
    <div className="flex flex-col gap-[45px]">
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default Main;
