import Navbar from "../src/Components/Navbar";
import Main from "../src/Components/Home";
import About from "../src/Components/About";
import Work from "../src/Components/Work";
export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <Main /> */}
      <About />
      <Work />
    </div>
  );
}
