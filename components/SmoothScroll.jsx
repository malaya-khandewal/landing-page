'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll() {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard expo easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
      infinite: false,
    });

    // Update ScrollTrigger whenever Lenis scrolls
    lenis.on('scroll', ScrollTrigger.update);

    // Use GSAP's ticker to drive Lenis scroll updates
    const onTick = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onTick);

    // Disable lag smoothing for synced timeline scrubbing
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Clean up ticker and destroy Lenis instance on unmount
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
  }, []);

  return null;
}
