import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../src/Components/Navbar";
import Footer from "../src/Components/Footer";
import { ThemeProvider } from "../src/Components/subComponents/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
