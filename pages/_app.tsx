import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../src/Components/Navbar";
import Footer from "../src/Components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
