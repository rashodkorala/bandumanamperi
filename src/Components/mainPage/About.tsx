import React, { useState, useRef, useEffect } from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";

//import x icon from react-icons
import { FaTimes } from "react-icons/fa";
import ArtistCv from "../subComponents/ArtistCv.jsx";

import Image from "next/image";
import Link from "next/link";

// import Data from "../data/data";

type Props = {};

const About = (props: Props) => {
  const image = {
    id: 1,
    src: "/Assets/profile.jpeg",
    span: "grayscale drop-shadow-xl shadow-2xl w-[200px] h-[200px] xl:w-[400px] xl:h-[400px] rounded-full",
    width: 500,
    height: 1200,
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div id="about" className="w-full h-full bg-white md:h-screen justify-center items-center flex flex-col">
      <div className="max-w-[1900px] mx-auto px-4 flex flex-col justify-center text-black xsm:px-5">
        <h1 className="font-bold text-[40px] md:text-[47px] lg:text-[54px] xl:text-[63px]">About</h1>
        <div className="flex flex-col py-4 gap-3">
          <div className="">
            <Image key={image.id} src={image.src} alt="image" className={image.span} width={image.width} height={image.height} />
          </div>
          <div>
            <p className="py-4 text-[15px] sm:text-[18px] md:text-[21px]  lg:text-[24px] xl:text-[28px] ztext-left font-light ">
              <strong className="font-bold">Bandu Manamperi</strong> is a renowned artist who holds a BFA in sculpture and is a part of
              Colombo&apos;s Theertha Artists&apos; Collective. He is a pioneer of performance art in Sri Lanka and continues to be an
              influential figure in the field. He creates deeply personal artworks that focus on the transformation of his own body, while
              also working in other mediums such as sculpture, drawing, painting, and installation. He frequently lectures and consults on
              various topics such as contemporary art, performance, museology, and traditional craft techniques. His art practice explores
              themes of memory and the ways in which external events and ideologies shape our individual experiences and become inscribed in
              our bodies.
            </p>
            <button
              className="flex text-md hover:scale-110 transition-all duration-1000 ease-in-out bg-black w-[100px] md:w-[120px] text-white rounded-[45px] px-2 py-1 md:px-4 md:py-2 items-center justify-center"
              onClick={() => {
                setIsPopupOpen(true);
              }}>
              View CV
              <HiArrowCircleRight />
            </button>
            {isPopupOpen && (
              <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-50 ">
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-70" id="overlay"></div>
                <div className="w-full max-w-[1500px] h-full max-h-[700px] justify-center items-center overflow-scroll mx-auto roundedtext-left px-6 z-10 bg-[#ffffff]">
                  <div className="flex flex-row  bg-white justify-between items-center p-3 pt-6 opacity-100" id="header">
                    <h1 className="text-2xxl font-bold text-black">Curriculum Vitae</h1>
                    <div
                      className="cursor-pointer z-50 "
                      onClick={() => {
                        {
                          setIsPopupOpen(false);
                        }
                      }}>
                      <FaTimes />
                    </div>
                  </div>
                  <div className="p-3">
                    <ArtistCv />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
