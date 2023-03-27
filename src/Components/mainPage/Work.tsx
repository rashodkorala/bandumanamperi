import React, { useState } from "react";
import { Link as Links } from "react-scroll";
import Link from "next/link";
import Slider from "./../subComponents/imageSlideShow/Slider";

type Props = {};
const Work = (props: Props) => {
  const slides = [
    {
      url: "/Assets/installations_and_Sculptures/Instant_Nirvana_Private_Limited_4.jpg",
    },
    {
      url: "/Assets/paintings/thousondEggs.jpg",
    },
    {
      url: "/Assets/Preformances/IronMan.jpg",
    },

    {
      url: "/Assets/Preformances/Bandaged_Body_1.jpg",
    },
    {
      url: "/Assets/installations_and_Sculptures/Numbed.jpg",
    },
  ];
  const [hoveredSlideIndex, setHoveredSlideIndex] = useState(0);

  return (
    <div id="work" className="w-ful snap-start p-5">
      <div className="max-w-[1000px] mx-auto px-5  text-black">
        <div className="flex">
          <h1 className="font-bold text-3xl xsm:text-4xl sm:text-5xl">Work</h1>
        </div>
        <div className="flex">
          <Slider hoveredSlideIndex={hoveredSlideIndex} setHoveredSlideIndex={setHoveredSlideIndex} slides={slides} />
        </div>

        <div className=" py-6 p-4 flex flex-col md:grid md:grid-flow-col md:grid-cols-3 gap-3">
          <button className="bg-black text-white rounded-[25px] py-3">
            <Link href="/paintings">Paintings and Drawings</Link>
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
