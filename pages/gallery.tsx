import React from "react";
import Gallery from "../src/Components/Gallery";

type Props = {};

const gallery = (props: Props) => {
  return (
    <div className="w-full flex flex-col p-6 mt-[120px] gap-10">
      <div>
        <h1 className="font-bold text-3xl xsm:text-4xl sm:text-5xl">Gallery</h1>
      </div>
     
        <Gallery />
     
    </div>
  );
};

export default gallery;
