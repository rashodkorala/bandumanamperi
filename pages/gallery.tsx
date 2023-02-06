import React from "react";
import Gallery from "../src/Components/Gallery";
import Navbar from "../src/Components/Navbar";

type Props = {};

const gallery = (props: Props) => {
  return (
    <div>
      <Navbar />
      <Gallery />
    </div>
  );
};

export default gallery;
