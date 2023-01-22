import React from "react";
import Slider from "./subComponents/imageSlideShow/Slider";

type Props = {};
const Work = (props: Props) => {
  return (
    <div className="w-full h-screen bg-white">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full text-black xsm:px-5">
        <h1 className="font-bold text-3xl xsm:text-4xl sm:text-5xl">Work</h1>
        <div className="flex w-full bg-black text-white items-center justify-center text-center">
          <Slider />
        </div>
        <div className=" p-2 flex flex-col md:grid md:grid-flow-col md:grid-cols-3 gap-3">
          <button className="bg-black text-white rounded-[25px] py-3">
            Paintings and Drawings
          </button>
          <button className="bg-black text-white rounded-[25px] py-3">
            Preformances
          </button>
          <button className="bg-black text-white rounded-[25px] py-3">
            Sculptures and Installations
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
