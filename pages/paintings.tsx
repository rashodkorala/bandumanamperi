import React from "react";
import Gallery from "../src/Components/Gallery";
import Navbar from "../src/Components/navbar";

type Props = {};

const Paintings = (props: Props) => {
  return (
    <div>
      <Navbar />
      <Gallery />
    </div>
  );
};

export default Paintings;
