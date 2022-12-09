import Essentials from "./Components/essentials/Essentials";
import FoundIn from "./Components/foundin/FoundIn";
import Hero from "./Components/hero/Hero";
import PerfectFit from "./Components/perfectfit/PerfectFit";
import "./sass/main.scss";

export default function Home() {
  return (
    <div>
      <Hero />
      <FoundIn />
      <Essentials />
      <PerfectFit />
    </div>
  );
}
