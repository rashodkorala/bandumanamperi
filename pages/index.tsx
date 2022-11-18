import Main from "../src/Components/Home";
import About from "../src/Components/About";
import Work from "../src/Components/Work";
import Contact from "../src/Components/Contact";
import Footer from "../src/Components/Footer";
import Navbar from "../src/Components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
