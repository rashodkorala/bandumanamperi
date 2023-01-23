import Link from "next/link";
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
      className=" snap-center bg-black flex flex-col w-full h-[500px] md:h-[300px] bottom-0 text-[#ffffff7d] justify-center items-staet text-[12px]md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]"
    >
      <div className="p-3">
        <div className="py-3">Bandu Manamperi.</div>
        <div className="grid grid-cols-2 justify-start items-start gap-7 md:grid-cols-3">
          <div className="flex flex-col w-full h-full justify-start items-start border-t-2 border-[#c0c0c0ca]">
            <h2 className="text-[14px] font-bold pt-1">EXPLORE</h2>
            <ul className="flex flex-col text-[14px]">
              <li className="px-0 py-2 uppercase">Home</li>
              <li className="px-0 py-2 uppercase">About</li>
              <li className="px-0 py-2 uppercase">Work</li>
              <li className="px-0 py-2 uppercase">Contact</li>
            </ul>
          </div>
          <div className="flex flex-col w-full h-full justify-start items-start border-t-2 border-[#c0c0c0ca]">
            <h2 className="text-[14px] font-bold pt-1">SOCIAL</h2>
            <ul className="flex flex-col text-[14px]">
              <li className="flex py-1 px-0 items-center">
                <Link href="/">
                  <FaFacebook size={15} className=" mr-1" />
                </Link>
                Facebook
              </li>
              <li className="flex py-1 px-0 items-center">
                <Link href="/">
                  <FaInstagram size={15} className="mr-1" />
                </Link>
                Instagram
              </li>
              <li className="flex py-1 px-0 items-center">
                <Link href="/">
                  <FaTwitter size={15} className="mr-1" />
                </Link>
                Twitter
              </li>
              <li className="flex py-1 px-0 items-center">
                <Link href="/">
                  <HiOutlineMail size={15} className="mr-1" />
                </Link>{" "}
                Mail
              </li>
            </ul>
          </div>
          <div className="flex flex-col w-full h-full justify-start items-start border-t-2 border-[#c0c0c0ca]">
            <h2 className="text-[14px] font-bold pt-1">CONTACT</h2>
            <ul className="flex flex-col text-[14px]">
              <li className="px-0 py-2">+94 773672789</li>
              <li className="px-0 py-2">
                67A1, Ihalawatta, Delgaswatta Temple Road,
                Weedagama,Bandaragama, Sri Lanka.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full border-t-2 border-[#c0c0c0ca] ">
          <div className="flex flex-col justify-center items-center w-full h-full p-2 md:flex-row md:justify-around ">
            <span className="text-[12px] flex items-center">
              <FaRegCopyright size={15} className="mr-1" />
              2021 Bandu Manamperi{" "}
            </span>
            <span className="text-[12px]">All Rights Reserved</span>
            <span className="text-[12px]">Designed By Rashod Korala</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
