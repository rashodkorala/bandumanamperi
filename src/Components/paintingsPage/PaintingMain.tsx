import React from "react";
import Gallery from "../Gallery";
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
    <div className="w-full  text-black flex flex-col p-6 pt-16">
      <div className="p-3">
        <h1 className="text-3xl text-black text-center font-bold">Paintings</h1>
        <p className="p-5 px-[35px]">
          Explore the rich and deeply personal artworks of Bandu Manamperi on this page. Through his use of shapes and patterns, he explores
          the themes of memory and transformation in a deeply personal way. Each painting is a study in balance, harmony, and the ways in
          which external events can shape our individual experiences. Take a moment to browse through the gallery and discover the beauty
          and depth of Bandu&apos;s art.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-full">
          <Slider setHoveredSlideIndex={0} hoveredSlideIndex={0} slides={slides} />
        </div>
        <div>
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default PaintingMain;
