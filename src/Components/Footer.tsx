import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div
      id="Footer"
      className=" bg-black flex flex-col w-full  md:h-[70px] text-[#ffffffaa] justify-center items-center text-[12px]"
    >
      <div className="hidden md:flex items-center font-mono">
        <p className="flex items-center ">
          copyright <FaRegCopyright size={12} className="mx-1" />
          Bandu Manamperi 2022 | All Rights Reserved |{" "}
          {"Designed by Rashod Korala "}
        </p>
      </div>
      <div className="flex flex-col md:hidden">
        <ul className="flex flex-col items-center justify-center text-xl ">
          <li className="py-1 mr-4">About</li>
          <li className="py-1 mr-4">Projects</li>
          <li className="py-1 mr-4">Home</li>
          <li className="py-1 mr-4">Contact</li>
        </ul>
        <div className="py-3">
          {/* social media icons */}
          <div>
            <ul className="flex">
              <li>
                <a href="/">
                  <FaFacebook size={20} />
                </a>{" "}
              </li>
              <li>
                <a href="/">
                  <FaInstagram size={20} />
                </a>{" "}
              </li>
              <li>
                <a href="/">
                  <FaTwitter size={20} />
                </a>{" "}
              </li>
              <li>
                <a href="/">
                  <HiOutlineMail size={20} />
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
        <p className="flex items-center text-center font-mono">
          {" "}
          copyright <FaRegCopyright size={12} className="mx-1" />
          Bandu Manamperi 2022
        </p>
        <p className="text-center font-mono text-md">
          Designed by Rashod Korala
        </p>
      </div>
    </div>
  );
};

export default Footer;
