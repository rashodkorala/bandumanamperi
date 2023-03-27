import Main from "../src/Components/Home";

import { useRouter } from "next/router";

export default function Home() {
  return (
    <div className="flex flex-col mt-[50px] md:mt-[0px]">
      <Main />
    </div>
  );
}
