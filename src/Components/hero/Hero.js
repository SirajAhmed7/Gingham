import { useState } from 'react';
import CtaButton from '../CtaButton';
import Navbar from './Navbar';

export default function Hero() {
  // const [navOpen, setNavOpen] = useState(false);

  // const openNav = function () {
  //   setNavOpen(prevState => {
  //     return !prevState;
  //   });
  // };

  return (
    <section className={`hero-section`}>
      <Navbar />
      <div className="hero-content container">
        <div className="an-left-hero">
          <h1 className="main-title">Go beyond</h1>
          <h1 className="main-title fashion">fashion</h1>
        </div>
        <div className="hero-text  an-left-hero">
          Designed to make you look and feel your best. Outfits that match your
          personality.
        </div>
        <CtaButton text="Shop now" anLeft="true" />
      </div>
      <img
        src="./img/pattern-svg.svg"
        className="pattern pattern-hero"
        draggable="false"
      />
    </section>
  );
}
