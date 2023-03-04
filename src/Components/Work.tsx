import React, { useState } from "react";
import Slider from "./subComponents/imageSlideShow/Slider";

type Props = {};
const Work = (props: Props) => {
  const [hoveredSlideIndex, setHoveredSlideIndex] = useState(0);

  return (
    <div id="work" className="w-full bg-white snap-start snap-proximity h-screen items-start">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-start  h-full text-black xsm:px-5">
        <div className="flex">
          <h1 className="font-bold text-3xl xsm:text-4xl sm:text-5xl">Work</h1>
        </div>
        <div className="flex">
          <Slider hoveredSlideIndex={hoveredSlideIndex} setHoveredSlideIndex={setHoveredSlideIndex} />
        </div>

        <div className=" p-2 flex flex-col md:grid md:grid-flow-col md:grid-cols-3 gap-3">
          <button className="bg-black text-white rounded-[25px] py-3" onClick={() => setHoveredSlideIndex(1)}>
            Paintings and Drawings
          </button>
          <button className="bg-black text-white rounded-[25px] py-3" onClick={() => setHoveredSlideIndex(2)}>
            Preformances
          </button>
          <button className="bg-black text-white rounded-[25px] py-3" onClick={() => setHoveredSlideIndex(3)}>
            Sculptures and Installations
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
