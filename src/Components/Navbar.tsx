import Link from "next/link";
import { Link as LinkS } from "react-scroll";

import { navLinks, socialLinks } from "../data/linksData";

import React, { useState } from "react";
import { FaFacebook, FaTimes, FaBars, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

type Props = {};

const Navbar = (props: Props) => {
  const [nav, setNav] = useState(false);
  const HandleClick = () => setNav(!nav);

  return (
    <div className="fixed bg-white w-full h-[50px] sm:h-[80px] flex justify-between items-center px-4 text-black z-50 top-0">
      <div className="z-50">
        <h1>Bandu Manamperi</h1>
        {/* <img src={Logo} alt="logo" style={{ width: "50px" }} /> */}
      </div>
      {/* menu */}
      <div className="hidden md:flex">
        <ul className="flex">
          {navLinks.map((link, index) => (
            <li className="py-4" key={index}>
              <Link href={link.path} legacyBehavior scroll={link.scroll}>
                <LinkS activeClass="active" to={link.scrollTo} smooth={true} duration={500} offset={link.offset}>
                  {link.title}
                </LinkS>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* hamburger menu */}
      <div onClick={HandleClick} className="md:hidden z-20">
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      {/* mobile meunu */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center z-10"}>
        {navLinks.map((link, index) => (
          <li className="py-4" key={index}>
            <Link href={link.path} legacyBehavior scroll={link.scroll}>
              <LinkS activeClass="active" to={link.scrollTo} smooth={true} duration={500} onClick={HandleClick} offset={link.offset}>
                {link.title}
              </LinkS>
            </Link>
          </li>
        ))}

        {/* social media icons */}
        <div className="py-2">
          <ul className="flex">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path}>
                  <link.icon size={20} />
                </Link>{" "}
              </li>
            ))}
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
