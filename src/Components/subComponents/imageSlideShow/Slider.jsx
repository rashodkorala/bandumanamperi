import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const imageData = [
  {
    id: 1,
    img: "https://picsum.photos/id/15/1600/800",
    title: "Title 1",
    description: "Description 1",
  },
  {
    id: 2,
    img: "https://picsum.photos/id/16/1600/800",
    title: "Title 2",
    description: "Description 2",
  },
  {
    id: 3,
    img: "https://picsum.photos/1600/800?random=3",
    title: "Title 3",
    description: "Description 3",
  },
  {
    id: 4,
    img: "https://picsum.photos/1600/800?random=4",
    title: "Title 4",
    description: "Description 4",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const length = imageData.length;
  const slideLeft = () => {
    // setCurrent(current === 0 ? length - 1 : current - 1);
    let slide = document.getElementById("slider");
    slide.scrollIntoView({ behavior: "smooth", block: "center" });
    //add fade animation to the component here
    slide.classList.add("");
  };

  const slideRight = () => {
    // setCurrent(current === length - 1 ? 0 : current + 1);
    let slide = document.getElementById("slider");
    slide.scrollLeft += slide.offsetWidth;
    slide.classList.add("");
  };

  return (
    <div className="bg-blue-300 flex justify-center items-center max-w-[1600px]">
      <div className="relative">
        <MdChevronLeft
          onClick={slideLeft}
          className="absolute z-10 left-0 text-5xl text-white cursor-pointer opacity-50 hover:opacity-100"
        />
      </div>
      <div
        id="slider"
        className="flex flex-row overflow-x-scroll scroll whitespace-nowrap scroll-smooth snap-mandatory snap-x scrollbar-hide"
      >
        {/* <img
          id="slideImg"
          src={imageData[current].img}
          alt=""
          className="transition duration-500 ease-in-out transform"
        /> */}
        {imageData.map((image) => (
          <img src={image.img} className="bg-black snap-center" />
        ))}
      </div>
      <div className="relative bg-black" onClick={slideRight}>
        <MdChevronRight
          onClick={slideRight}
          className="absolute z-10 right-0 text-5xl text-white cursor-pointer opacity-50 hover:opacity-100"
        />
      </div>
    </div>
  );
};

export default Slider;
