import React, { useState } from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import ArtistCv from "./subComponents/ArtistCv";

import Image from "next/image";
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
    <div id="about" className="w-full h-screen bg-white ">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full text-black xsm:px-5">
        <h1 className="font-bold text-3xl xsm:text-4xl sm:text-5xl">About</h1>
        <div className="flex flex-col p-4">
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
            <strong className="font-bold">Bandu Manamperi</strong> holds a BFA
            in sculpture and is a core member of Colombo’s Theertha Artists’
            Collective. One of the initiators of performance art in Sri Lanka,
            Bandu remains one of the leading performance artists active at
            present. He creates highly personal art experiences based on the
            transformation of his own body. His art practice also encompasses
            sculpture, drawing, painting, and installation art. He lectures and
            consults widely on a range of topics including contemporary art,
            performance, museology, and local craft traditions. Manamperi’s
            praxis brings together notions of memory, and demonstrates how the
            effects of external events and doctrines are absorbed into the
            individual’s being through the body to create memories that become
            inscribed within us.
          </p>
          <a
            href="https://photosbyrashod.myportfolio.com"
            target="_blank"
            rel="noreferrer"
            className="p-4 flex items-center text-md hover:scale-110 transition-all duration-1000 ease-in-out bg-black w-40 text-white rounded-[45px] px-4 py-2"
          >
            View Artist CV
            <HiArrowCircleRight />
          </a>
        </div>

        {/* <button onClick={() => setIsPopupOpen(true)}>Open CV</button> */}
      </div>
    </div>
  );
};

export default About;
