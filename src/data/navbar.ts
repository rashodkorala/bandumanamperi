import { icons } from "react-icons";
import { FaFacebook, FaTimes, FaBars, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const navLinks = [
  { title: "About", path: "/#about", scrollTo: "about" },
  { title: "Work", path: "/#work", scrollTo: "work" },
  { title: "Contact", path: "/#contact", scrollTo: "contact" },
  { title: "Gallery", path: "/gallery", scrollTo: "" },
];

export const socialLinks = [
  { title: "Twitter", path: "https://twitter.com/yourusername", icon: FaTwitter },
  { title: "Instagram", path: "https://instagram.com/yourusername", icon: FaInstagram },
  { title: "LinkedIn", path: "https://linkedin.com/in/yourusername", icon: FaFacebook },
];
