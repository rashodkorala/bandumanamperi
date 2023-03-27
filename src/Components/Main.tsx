import React from "react";
import Contact from "./mainPage/Contact";

import About from "./mainPage/About";
import Work from "./mainPage/Work";

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
