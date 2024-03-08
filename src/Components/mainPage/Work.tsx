import React, { useState } from "react";
import { Link as Links } from "react-scroll";
import Link from "next/link";
import Slider from "./../subComponents/imageSlideShow/Slider";
import { useRouter } from "next/router";

type Props = {};
const Work = (props: Props) => {
  const router = useRouter();

  const handlePaintingsClick = () => {
    router.push("/paintings");
  };

  const handlePerformancesClick = () => {
    router.push("/preformances");
  };

  const handleSculpturesClick = () => {
    router.push("/sculptures");
  };

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
    <div
      id="work"
      className="w-full h-full md:h-[95vh] bg-transparent snap-center snap-always p-4 flex items-center justify-center"
    >
      <div className="max-w-[1900px] w-full h-full flex flex-col justify-center items-center xsm:px-5">
        <div className="flex w-full">
          <h1 className="font-bold text-[40px] md:text-[47px] lg:text-[54px] xl:text-[63px]">
            Work
          </h1>
        </div>
        <div className="flex w-full">
          <Slider
            hoveredSlideIndex={hoveredSlideIndex}
            setHoveredSlideIndex={setHoveredSlideIndex}
            slides={slides}
          />
        </div>

        <div className="py-6 p-6 flex flex-col md:grid md:grid-flow-col md:grid-cols-3 gap-3">
          <button className="rounded-[25px] p-3" onClick={handlePaintingsClick}>
            <Link href="/paintings">Paintings and Drawings</Link>
          </button>
          <button
            className="rounded-[25px] p-3"
            onClick={handlePerformancesClick}
          >
            <Link href="/preformances">Preformances</Link>
          </button>
          <button
            className="rounded-[25px] p-3"
            onClick={handleSculpturesClick}
          >
            <Link href="/sculptures">Sculptures and Installations</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
