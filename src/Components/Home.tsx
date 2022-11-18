import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Slider from "./subComponents/imageSlideShow/Slider";

const Home = () => {
  return (
    <div className="flex w-full h-screen bg-white justify-center items-center">
      <Slider />
    </div>
  );
};

export default Home;
