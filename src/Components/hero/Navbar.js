import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

function getWindowWidth() {
  const { innerWidth: width } = window;
  return width;
}

export default function Navbar() {
  const boxRef = useRef();
  const [navOpen, setNavOpen] = useState(false);
  const [width, setWidth] = useState(getWindowWidth());

  useEffect(() => {
    document.body.classList.toggle('nav-open', navOpen);
  }, [navOpen]);

  useEffect(() => {
    function handleResize() {
      setWidth(getWindowWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useLayoutEffect(() => {
    if (width <= 700) {
      if (navOpen) {
        let ctx = gsap.context(() => {
          // Hero text animation
          gsap.from('.navlink-box', {
            y: '-100vh',
            duration: 0.6,
            ease: 'power3.out',
          });
        }, boxRef);
        return () => ctx.revert();
      }
      if (!navOpen) {
        let ctx = gsap.context(() => {
          // Hero text animation
          gsap.from('.navlink-box', {
            y: '0',
            duration: 0.6,
            ease: 'power3.out',
          });
        }, boxRef);
        return () => ctx.revert();
      }
    }
  }, [navOpen, width]);

  return (
    <nav ref={boxRef} className="navbar">
      <img src="./img/Gingham-brand-logo.svg" />
      <div className="navlink-box">
        <a href="#" className="navlink">
          Home
        </a>
        <a href="#" className="navlink">
          About
        </a>
        <a href="#" className="navlink">
          Login
        </a>
        <a href="#" className="navlink small-cta">
          Shop now
        </a>
      </div>
      <button onClick={() => setNavOpen(!navOpen)} className="nav-icon">
        <div className="nav-icon-div icon-up "></div>
        <div className="nav-icon-div icon-mid"></div>
        <div className="nav-icon-div icon-down"></div>
      </button>
    </nav>
  );
}
