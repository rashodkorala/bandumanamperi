import React, { useState } from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
// import ArtistCv from "./subComponents/ArtistCv";

import Image from "next/image";
import Link from "next/link";

// import Data from "../data/data";

type Props = {};

const About = (props: Props) => {
  const image = {
    id: 1,
    src: "/Assets/profile.jpeg",
    span: "grayscale border-8 border-[#F0F0F0] shadow-2xl",
    width: 500,
    height: 1500,
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div id="about" className="w-full h-screen bg-white snap-always snap-start">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full text-black xsm:px-5">
        <h1 className="font-bold text-3xl xsm:text-4xl sm:text-5xl">About</h1>
        <div className="flex flex-col py-4">
          <div className="">
            <Image
              key={image.id}
              src={image.src}
              alt="image"
              className={image.span}
              width={image.width}
              height={image.height}
            />
          </div>
          <p className="py-4 text-[12px] xsm:text-md xl:text-xl text-left font-light ">
            <strong className="font-bold">Bandu Manamperi</strong> is a renowned
            artist who holds a BFA in sculpture and is a part of Colombo&apos;s
            Theertha Artists&apos; Collective. He is a pioneer of performance
            art in Sri Lanka and continues to be an influential figure in the
            field. He creates deeply personal artworks that focus on the
            transformation of his own body, while also working in other mediums
            such as sculpture, drawing, painting, and installation. He
            frequently lectures and consults on various topics such as
            contemporary art, performance, museology, and traditional craft
            techniques. His art practice explores themes of memory and the ways
            in which external events and ideologies shape our individual
            experiences and become inscribed in our bodies.
          </p>
          {/* <Link
            href="/artistcv"
            className="p-4 flex text-md hover:scale-110 transition-all duration-1000 ease-in-out bg-black w-[130px] text-white rounded-[45px] px-4 py-2 items-center justify-center space-x-2"
          >
            View CV
            <HiArrowCircleRight />
          </Link> */}
          <button
            className="p-4 flex text-md hover:scale-110 transition-all duration-1000 ease-in-out bg-black w-[130px] text-white rounded-[45px] px-4 py-2 items-center justify-center space-x-2"
            onClick={() => setIsPopupOpen(true)}
          >
            View CV
            <HiArrowCircleRight />
          </button>
          {isPopupOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-20"></div>
              <div className="bg-white w-full md:max-w-full mx-auto rounded shadow-lg py-4 text-left px-6">
                <div className="flex justify-between items-center pb-3 opacity-100">
                  <h1 className="text-2xl font-bold text-black">
                    Bandu Manamperi
                  </h1>

                  <div
                    className="cursor-pointer z-50"
                    onClick={() => setIsPopupOpen(false)}
                  >
                    <HiArrowCircleLeft />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* <button onClick={() => setIsPopupOpen(true)}>Open CV</button> */}
      </div>
    </div>
  );
};

export default About;