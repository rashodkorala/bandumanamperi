import React from "react";
import Slider from "../subComponents/imageSlideShow/Slider";
type Props = {};

const SculpturesMain = (props: Props) => {
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
    <div className="w-full flex flex-col md:pt-16 max-w-[2000px] mx-auto justify-center items-center">
      <div className="p-4 flex flex-col md:flex-row justify-center items-center">
        <div className="p-4 flex flex-col">
          <h1 className="text-3xl xl:text-[50px] text-left font-bold leading-10">Sculptures and Installations</h1>
          <p className="py-6 text-[14px] xsm:text-md xl:text-xl text-left font-light max-w-[1200px]">
            Bandu Manamperi&apos;s artistic work delves deeply into the complex and multifaceted issues surrounding the commercialization
            and commodification of cultural symbols in Sri Lankan society. Through his sculptures and installations, he confronts and
            challenges the ways in which cultural heritage and identity are often reduced to mere commodities in a market-driven economy.
            <br></br>
            Furthermore, Bandu Manamperi&apos;s exploration of the theme of war and its effects on society through performance art
            highlights the profound impact that conflict and violence can have on individuals and communities. By using his artistic
            practice to raise awareness and encourage critical reflection on these pressing social issues, the artist contributes to a
            deeper understanding of the complexities and challenges facing contemporary Sri Lankan society.
          </p>
        </div>
        <div className="flex flex-col w-full justify-center items-center">
          <Slider setHoveredSlideIndex={0} hoveredSlideIndex={0} slides={slides} />
        </div>
      </div>
      <div>{/* <Gallery /> */}</div>
    </div>
  );
};

export default SculpturesMain;
