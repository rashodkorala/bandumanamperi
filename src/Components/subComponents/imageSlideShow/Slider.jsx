import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function createImage(width, height) {
  const images = [];

  for (let index = 0; index < 5; index++) {
    //different sizes of images

    images.push({
      id: index + "",
      img:
        "https://picsum.photos/" +
        width +
        "/" +
        height +
        "/" +
        "?random=" +
        index,
      width: width,
      height: height,
      view: "desktop",
    });
  }
  return images;
}

const Slider = () => {
  const imageData = createImage(1800, 600);
  const imageDataMobile = createImage(400, 200);

  const slideLeft = () => {
    // setCurrent(current === 0 ? length - 1 : current - 1);
    let slide = document.getElementById("sliderdesktop");
    slide.scrollLeft -= slide.offsetWidth;

    let slideMobile = document.getElementById("slidermobile");
    slideMobile.scrollLeft -= slideMobile.offsetWidth;
  };

  const slideRight = () => {
    // setCurrent(current === length - 1 ? 0 : current + 1);
    let slide = document.getElementById("sliderdesktop");
    slide.scrollLeft += slide.offsetWidth;

    let slideMobile = document.getElementById("slidermobile");
    slideMobile.scrollLeft += slideMobile.offsetWidth;
  };

  return (
    <div className="bg-blue-300 flex justify-center items-center w-full mx-auto">
      <div className="relative">
        <MdChevronLeft
          onClick={slideLeft}
          className="absolute z-10 left-0 text-5xl text-white cursor-pointer opacity-50 hover:opacity-100"
        />
      </div>
      <div
        id="sliderdesktop"
        className=" hidden md:flex md:flex-row overflow-x-scroll scroll whitespace-nowrap scroll-smooth snap-mandatory snap-x scrollbar-hide "
      >
        {/* <img
          id="slideImg"
          src={imageData[current].img}
          alt=""
          className="transition duration-500 ease-in-out transform"
        /> */}
        {/* in mobile view load mobile images
      and in desktop view load desktop images */}
        {imageData.map((image) => (
          <Image
            key={image.id}
            src={image.img}
            alt=""
            className="transition duration-500 ease-in-out transform snap-center"
          />
        ))}
      </div>
      <div
        id="slidermobile"
        className="flex flex-row overflow-x-scroll scroll whitespace-nowrap scroll-smooth snap-mandatory snap-x scrollbar-hide md:hidden"
      >
        {/* <img
          id="slideImg"
          src={imageData[current].img}
          alt=""
          className="transition duration-500 ease-in-out transform"
        /> */}
        {/* in mobile view load mobile images
      and in desktop view load desktop images */}
        {imageDataMobile.map((image) => (
          <Image
            key={image.id}
            src={image.img}
            alt=""
            className="transition duration-500 ease-in-out transform snap-center"
          />
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
