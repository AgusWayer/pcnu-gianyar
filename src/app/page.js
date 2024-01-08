import Navbar from "@/components/Navbar";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import Hero from "@/components/Hero";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;
export default function Home() {
  return (
    <main className="">
      <Navbar color={"white"} />
      <Hero />
    </main>
  );
}
