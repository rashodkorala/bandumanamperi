import { icons } from "react-icons";
import { FaFacebook, FaPhoneAlt, FaInstagram, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const navLinks = [
  { title: "About", path: "/", scrollTo: "about", offset: -200, scroll: false },
  { title: "Work", path: "/#work", scrollTo: "work", offset: -50, scroll: false },
  { title: "Contact", path: "/#contact", scrollTo: "contact", offset: 0, scroll: false },
  { title: "Gallery", path: "/gallery", scrollTo: "", offset: 0, scroll: true },
];

export const socialLinks = [
  { title: "Twitter", path: "https://twitter.com/yourusername", icon: FaTwitter },
  { title: "Instagram", path: "https://instagram.com/bandumanamperi", icon: FaInstagram },
  { title: "Facebook", path: "https://facebook.com/bandumanamperi", icon: FaFacebook },
];

export const contacts = [
  {
    title: "Email",
    class: "px-0 pb-1 gap-1 flex items-center",
    path: "mailto:bandumanamperi@yahoo.com",
    icon: HiOutlineMail,
    iconSize: 15,
    desc: "bandumanamperi@yahoo.com",
  },
  {
    title: "Phone",
    class: "px-0 pb-1 gap-1 flex items-center",
    path: "tel:+94773672789",
    icon: FaPhoneAlt,
    iconSize: 15,
    desc: "+94773672789",
  },
  {
    title: "Address",
    class: "px-0 pb-1 gap-1 flex items-center",
    path: "https://goo.gl/maps/1Q9Z9Z9Z9Z9Z9Z9Z9",
    icon: FaMapMarkerAlt,
    iconSize: 25,
    desc: "67A1,Ihalawatta Delgaswatta Temple Road , Weedagama, Bandaragama , Western Province , Sri Lanka",
  },
];
