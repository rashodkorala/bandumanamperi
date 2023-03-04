import Main from "../src/Components/Home";

import { useRouter } from "next/router";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Main />
    </div>
  );
}
