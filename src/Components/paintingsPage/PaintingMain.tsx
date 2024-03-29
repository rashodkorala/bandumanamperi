import React from "react";
import Gallery from "../Gallery";
import Slider from "../subComponents/imageSlideShow/Slider";
/* import Timeline, { TimelineEvent } from "./Timeline";

const events: TimelineEvent[] = [
  {
    date: "2022-01-01",
    title: "Solo exhibition",
    description: "My first solo exhibition at the XYZ gallery",
    image: "/Assets/installations_and_Sculptures/Instant_Nirvana_Private_Limited_4.jpg",
  },
  {
    date: "2022-05-15",
    title: "Group exhibition",
    description: "Group exhibition featuring my latest artwork",
    image: "/Assets/paintings/thousondEggs.jpg",
  },
  {
    date: "2023-02-01",
    title: "Art award",
    description: "Recipient of the prestigious XYZ art award",
    image: "/Assets/Preformances/IronMan.jpg",
  },
]; */

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
    <div className="w-full flex flex-col md:pt-16 max-w-[1000px] mx-auto justify-center items-center">
      <div className="p-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl xl:text-[50px] text-center font-bold">Paintings</h1>
        <p className="py-3 text-[14px] xsm:text-md xl:text-xl text-center font-light max-w-[700px]">
          Explore the rich and deeply personal artworks of Bandu Manamperi on this page. Through his use of shapes and patterns, he explores
          the themes of memory and transformation in a deeply personal way. Each painting is a study in balance, harmony, and the ways in
          which external events can shape our individual experiences. Take a moment to browse through the gallery and discover the beauty
          and depth of Bandu&apos;s art.
        </p>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <Slider setHoveredSlideIndex={0} hoveredSlideIndex={0} slides={slides} />
      </div>
      {/* <div>
        <Timeline events={events} />
      // </div> */}
    </div>
  );
};

export default PaintingMain;
