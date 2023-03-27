import React from "react";
import Gallery from "../src/Components/Gallery";

type Props = {};

const gallery = (props: Props) => {
  return (
    <div className="w-full  text-black flex flex-col p-6 pt-16">
      <div>
        <h1 className="font-bold text-3xl xsm:text-4xl sm:text-5xl">Gallery</h1>
      </div>
      <div>
        <Gallery />
      </div>
    </div>
  );
};

export default gallery;
