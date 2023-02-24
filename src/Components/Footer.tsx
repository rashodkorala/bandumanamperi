import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaRegCopyright, FaTwitter } from "react-icons/fa";

import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

import { navLinks, socialLinks, contacts } from "../data/linksData";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div
      id="Footer"
      className="snap-center bg-black flex flex-col w-full h-[500px] md:h-[300px] text-[#ffffff7d] justify-center items-staet text-[12px]md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
      <div className="p-3">
        <div className="py-3">
          <h1 className="font-bold">Bandu Manamperi.</h1>
        </div>
        <div className="grid grid-cols-2 justify-start items-start gap-7 md:grid-cols-3">
          <div className="flex flex-col w-full h-full justify-start items-start border-t-2 border-[#c0c0c0ca]">
            <h2 className="text-[14px] font-bold pt-1">EXPLORE</h2>
            <ul className="flex flex-col text-[14px] pt-2">
              {navLinks.map((link, index) => (
                <Link href={link.path} className="px-0 pb-1 uppercase" key={index}>
                  {link.title}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-col w-full h-full justify-start items-start border-t-2 border-[#c0c0c0ca]">
            <h2 className="text-[14px] font-bold pt-1">SOCIAL</h2>
            <ul className="flex flex-col text-[14px pt-2 gpa-1 pb-1">
              {/* <li className="flex py-1 px-0 items-center hover:underline"> */}
              {socialLinks.map((link, index) => (
                <Link href={link.path} className="flex px-0 items-center hover:underline" key={index}>
                  <link.icon size={15} className=" mr-1 hover:underline" />
                  {link.title}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-col w-full h-full justify-start items-start border-t-2 border-[#c0c0c0ca] col-span-2">
            <h2 className="text-[14px] font-bold pt-1">CONTACT</h2>
            <ul className="flex flex-col text-[14px] pt-2">
              <p className="px-0 pb-2 text-[19px] font-bold">Bandu Manamperi&apos;s Home & Studio.</p>
              {contacts.map((contact, index) => (
                <Link href={contact.path} className={"px-0 pb-1 gap-1 flex items-center"} key={index}>
                  <contact.icon size={contact.iconSize} className="mr-1" />
                  {contact.desc}
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full border-t-2 border-[#c0c0c0ca] ">
          <div className="flex flex-col gap-1 justify-center items-center w-full h-full p-2 md:flex-row md:justify-around ">
            <div className="flex gap-2">
              <span className="text-[12px] flex items-center">
                <FaRegCopyright size={15} className="mr-1" />
                2023 Bandu Manamperi{" "}
              </span>
              <span className="text-[12px]">All Rights Reserved.</span>
            </div>
            <span className="text-[12px]">
              <Link href="https://rashodkorala.com" target={"_blank"} rel="noreferrer" className="hover:underline ">
                Designed By Rashod Korala
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
