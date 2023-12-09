import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../src/Components/Navbar";
import Footer from "../src/Components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
// import { useState, useEffect } from "react";
// import Popup from "./../src/Components/subComponents/Popups/devPopup";
export default function App({ Component, pageProps }: AppProps) {
  // const [showPopup, setShowPopup] = useState(false);

  // useEffect(() => {
  //   setShowPopup(true);
  // }, []);

  // const closePopup = () => {
  //   setShowPopup(false);
  // };

  return (
    <>
    {/* {sho wPopup && <Popup onClose={closePopup} />} */}
      <Navbar />
      <Component {...pageProps} />
       {/* <SpeedInsights /> */}
      <Footer />
    </>
  );
}
