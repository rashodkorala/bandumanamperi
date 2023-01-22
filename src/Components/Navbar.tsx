import Link from "next/link";
import { Link as LinkS } from "react-scroll";

import React, { useState } from "react";
import {
  FaFacebook,
  FaTimes,
  FaBars,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

type Props = {};

const Navbar = (props: Props) => {
  const [nav, setNav] = useState(false);
  const HandleClick = () => setNav(!nav);

  return (
    <div className=" bg-white fixed w-full h-[80px] flex justify-between items-center px-4 text-black">
      <div className="z-10">
        <h1>Bandu Manamperi</h1>
        {/* <img src={Logo} alt="logo" style={{ width: "50px" }} /> */}
      </div>
      {/* menu */}
      <div className="hidden md:flex">
        <ul className="flex">
          <li className="mr-4">Home</li>
          <li className="mr-4">About</li>
          <li className="mr-4">Work</li>
          <li className="mr-4">Contact</li>
        </ul>
      </div>
      {/* hamburger menu */}
      <div onClick={HandleClick} className="md:hidden z-10">
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      {/* mobile meunu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center"
        }
      >
        <li className="py-2 text-xl">
          <LinkS to="#work"></LinkS>
          {"Home "}
        </li>
        <li className="py-2 text-xl">About</li>
        <li className="py-2 text-xl">Work</li>
        <li className="py-2 text-xl">Contact</li>

        {/* social media icons */}
        <div className="py-2">
          <ul className="flex">
            <li>
              <Link href="/">
                <FaFacebook size={30} />
              </Link>{" "}
            </li>
            <li>
              <Link href="/">
                <FaInstagram size={30} />
              </Link>{" "}
            </li>
            <li>
              <Link href="/">
                <FaTwitter size={30} />
              </Link>{" "}
            </li>
            <li>
              <Link href="/">
                <HiOutlineMail size={30} />
              </Link>{" "}
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
