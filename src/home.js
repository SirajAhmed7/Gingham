import { useLayoutEffect, useRef } from 'react';
import Collection from './Components/collection/Collection';
import Essentials from './Components/essentials/Essentials';
import Footer from './Components/footer/Footer';
import FoundIn from './Components/foundin/FoundIn';
import Hero from './Components/hero/Hero';
import PerfectFit from './Components/perfectfit/PerfectFit';
import Styles from './Components/styles/Styles';
import './sass/main.scss';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import all from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const boxRef = useRef();

  // Hero text animation
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.an-left', {
        x: -150,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5,
        stagger: 0.1,
      });
    }, boxRef);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const allUp = gsap.utils.toArray('.an-up');

      allUp.forEach(elUp => {
        gsap.from(elUp, {
          scrollTrigger: {
            trigger: elUp,
            start: '-100 80%',
          },
          y: 150,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
      });

      gsap.from('.an-up-brand', {
        scrollTrigger: {
          trigger: '.an-up-brand',
          start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.1,
      });

      gsap.from('.an-footer', {
        scrollTrigger: {
          trigger: '.an-footer',
          start: 'top 95%',
        },
        y: 150,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }, boxRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={boxRef}>
      <Hero />
      <FoundIn />
      <Essentials />
      <PerfectFit />
      <Styles />
      <Collection />
      <Footer />
    </div>
  );
}
