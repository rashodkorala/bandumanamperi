import React from "react";
import Slider from "../subComponents/imageSlideShow/Slider";

type Props = {};

const PaintingMain = (props: Props) => {
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
  return (
    <div className="h-screen w-full text-white flex flex-col">
      <h1 className="text-3xl text-black bg-blue-400 text-center">Paintings</h1>
      <Slider hoveredSlideIndex={0} setHoveredSlideIndex={0} slides={slides} />
    </div>
  );
};

export default PaintingMain;
