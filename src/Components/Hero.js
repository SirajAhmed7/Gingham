import { useState } from "react";
import Navbar from "./Navbar";

export default function Hero() {
  const [cta, setCta] = useState({});

  const ctaHover = function (e) {
    setCta({
      backgroundColor: "transparent",
      transform: "translatey(-100%)",
      color: "white",
    });

    console.log(e.target);
  };

  const ctaHoverOut = function () {
    setCta({
      backgroundColor: "white",
      transform: "translatey(0)",
      color: "#000a04",
      transition: "all 0.2s 0.2s ease, transform 0.2s ease",
    });
  };

  const handleMouseDown = function () {
    setCta({
      backgroundColor: "rgb(255,255,255, .3)",
      transform: "translatey(-100%)",
      color: "white",
    });
  };
  const handleMouseUp = function () {
    setCta({
      backgroundColor: "transparent",
      transform: "translatey(-100%)",
      color: "white",
    });
  };

  return (
    <section className="hero-section">
      <Navbar />
      <div className="hero-content container">
        <div>
          <h1 className="main-title">Go beyond</h1>
          <h1 className="main-title fashion">fashion</h1>
        </div>
        <div className="hero-text">
          Designed to make you look and feel your best. Outfits that match your
          personality.
        </div>
        <div className="hero-cta-box">
          <a
            onMouseEnter={ctaHover}
            onMouseOut={ctaHoverOut}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            href="#"
            className="hero-cta-button"
            style={cta}
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}
