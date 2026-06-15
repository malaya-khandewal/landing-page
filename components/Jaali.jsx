'use client';

import { useEffect, useRef } from 'react';

/*
 * Jaali — the geometric perforated stone screen of Indo-Islamic architecture,
 * reinterpreted as a field of attention: structure with light passing through.
 * Cells illuminate around the cursor; a soft diagonal sweep keeps it alive when idle.
 * Pointer math is distance-based and resolution-independent, so it scales with the grid.
 */

const N = 8; // 8x8 lattice

export default function Jaali() {
  const gridRef = useRef(null);
  const cellsRef = useRef([]);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cells = cellsRef.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let active = false;
    let raf = 0;

    const clearAll = () => cells.forEach((c) => c && c.classList.remove('lit', 'near'));

    const lightFrom = (x, y) => {
      const r = grid.getBoundingClientRect();
      // radius scales with cell size so it feels consistent at any viewport width
      const cell = r.width / N;
      const litR = cell * 0.85;
      const nearR = cell * 1.5;
      cells.forEach((c) => {
        if (!c) return;
        const cr = c.getBoundingClientRect();
        const cx = cr.left + cr.width / 2 - r.left;
        const cy = cr.top + cr.height / 2 - r.top;
        const d = Math.hypot(x - cx, y - cy);
        c.classList.toggle('lit', d < litR);
        c.classList.toggle('near', d >= litR && d < nearR);
      });
    };

    const onMove = (e) => {
      const r = grid.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => lightFrom(x, y));
    };
    const onEnter = () => {
      active = true;
      clearAll();
    };
    const onLeave = () => {
      active = false;
      clearAll();
    };

    grid.addEventListener('pointerenter', onEnter);
    grid.addEventListener('pointermove', onMove);
    grid.addEventListener('pointerleave', onLeave);

    // idle: a gentle diagonal sweep so the screen breathes before interaction
    let idle = null;
    if (!reduce) {
      let t = 0;
      idle = setInterval(() => {
        if (active) return;
        clearAll();
        t = (t + 1) % (N * 2);
        cells.forEach((c, i) => {
          if (!c) return;
          const row = Math.floor(i / N);
          const col = i % N;
          if (row + col === t) c.classList.add('lit');
        });
      }, 180);
    }

    return () => {
      grid.removeEventListener('pointerenter', onEnter);
      grid.removeEventListener('pointermove', onMove);
      grid.removeEventListener('pointerleave', onLeave);
      if (idle) clearInterval(idle);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="jaali-panel" aria-hidden="true">
      <div className="jaali" ref={gridRef}>
        {Array.from({ length: N * N }).map((_, i) => (
          <span
            key={i}
            className="cell"
            ref={(el) => (cellsRef.current[i] = el)}
            style={{ animationDelay: `${i * 9}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
