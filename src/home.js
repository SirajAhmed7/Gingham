import Essentials from "./Components/Essentials";
import FoundIn from "./Components/FoundIn";
import Hero from "./Components/Hero";
import "./sass/main.scss";

export default function Home() {
  return (
    <div>
      <Hero />
      <FoundIn />
      <Essentials />
    </div>
  );
}
