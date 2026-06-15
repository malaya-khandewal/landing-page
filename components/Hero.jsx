'use client';

import { useEffect, useRef, useState } from 'react';
import Jaali from './Jaali';

const WORDS = ["what's next.", 'every learner.', 'every market.', 'every enterprise.'];

function Rotator() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const id = setInterval(() => {
      setIndex((i) => {
        setPrev(i);
        return (i + 1) % WORDS.length;
      });
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="rotator" aria-live="polite">
      {WORDS.map((w, i) => (
        <span key={w} className={i === index ? 'active' : i === prev ? 'exit' : ''}>
          {w}
        </span>
      ))}
    </span>
  );
}

function MagneticButton({ href, className, children }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.3}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <a ref={ref} href={href} className={className} onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
    </a>
  );
}

const MOTES = [
  { top: '18%', left: '6%', size: 6, delay: '0s' },
  { top: '68%', left: '12%', size: 4, delay: '1.4s' },
  { top: '30%', left: '46%', size: 5, delay: '2.8s' },
  { top: '80%', left: '52%', size: 7, delay: '.7s' },
  { top: '12%', left: '88%', size: 4, delay: '2s' },
];

export default function Hero() {
  const sectionRef = useRef(null);

  const onMove = (e) => {
    const el = sectionRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <section className="hero" ref={sectionRef} onPointerMove={onMove}>
      {MOTES.map((m, i) => (
        <span
          key={i}
          className="mote"
          aria-hidden="true"
          style={{ top: m.top, left: m.left, width: m.size, height: m.size, animationDelay: m.delay }}
        />
      ))}

      <div className="wrap">
        <div>
          <span className="eyebrow enter d1">
            <span className="dev">बोध</span> bodha · awakened intelligence
          </span>
          <h1 className="enter d2">
            Intelligence with <span className="roots">deep roots</span>,
            <br />
            built for <Rotator />
          </h1>
          <p className="lead enter d3">
            BodhaAI builds cutting-edge AI systems that help organizations automate operations,
            sharpen decision-making, and unlock growth — from Kolkata to the world.
          </p>
          <div className="hero-ctas enter d4">
            <MagneticButton href="#solutions" className="btn btn-primary">
              Explore solutions <span className="arr">→</span>
            </MagneticButton>
            <MagneticButton href="mailto:malaya@bodhaai.tech" className="btn btn-ghost">
              Get started
            </MagneticButton>
          </div>
          <div className="hero-note enter d5">
            <span>Empowering enterprise with intelligence, the ethics-first way.</span>
          </div>
        </div>

        <Jaali />
      </div>
    </section>
  );
}
