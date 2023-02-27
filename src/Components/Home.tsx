import React from "react";
import Contact from "./Contact";

import About from "./About";
import Work from "./Work";
import Footer from "./Footer";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
