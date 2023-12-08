import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../src/Components/Navbar";
import Footer from "../src/Components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
       <SpeedInsights />
      <Footer />
    </>
  );
}
