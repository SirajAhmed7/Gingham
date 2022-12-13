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

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const boxRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Hero text animation
      gsap.from('.an-left-hero', {
        x: -150,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5,
        stagger: 0.1,
      });

      // Mid images animation
      const allLeft = gsap.utils.toArray('.an-left');

      allLeft.forEach(elLeft => {
        gsap.from(elLeft, {
          scrollTrigger: {
            trigger: elLeft,
            start: 'top 50%',
          },
          x: -100,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          // delay: 0.5,
          // stagger: 0.1,
        });
      });

      const allRight = gsap.utils.toArray('.an-right');

      allRight.forEach(elRight => {
        gsap.from(elRight, {
          scrollTrigger: {
            trigger: elRight,
            start: 'top 50%',
          },
          x: 100,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          // delay: 0.5,
          // stagger: 0.1,
        });
      });

      // General float-up animation
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

      // Brand logo animation
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

      // Footer animation
      gsap.from('.an-footer', {
        scrollTrigger: {
          trigger: '.an-footer',
          start: '-130 95%',
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
