import React, { useState } from "react";
import Slider from "./../subComponents/imageSlideShow/Slider";

type Props = {};
const Work = (props: Props) => {
  const [hoveredSlideIndex, setHoveredSlideIndex] = useState(0);

  return (
    <div id="work" className="w-ful snap-start p-5">
      <div className="max-w-[1000px] mx-auto px-5  text-black">
        <div className="flex">
          <h1 className="font-bold text-3xl xsm:text-4xl sm:text-5xl">Work</h1>
        </div>
        <div className="flex">
          <Slider hoveredSlideIndex={hoveredSlideIndex} setHoveredSlideIndex={setHoveredSlideIndex} />
        </div>

        <div className=" py-6 p-4 flex flex-col md:grid md:grid-flow-col md:grid-cols-3 gap-3">
          <button className="bg-black text-white rounded-[25px] py-3" onClick={() => setHoveredSlideIndex(1)}>
            Paintings and Drawings
          </button>
          <button className="bg-black text-white rounded-[25px] py-3" onClick={() => setHoveredSlideIndex(2)}>
            Preformances
          </button>
          <button className="bg-black text-white rounded-[25px] py-3" onClick={() => setHoveredSlideIndex(4)}>
            Sculptures and Installations
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
