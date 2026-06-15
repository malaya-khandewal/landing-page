'use client';

import { useState } from 'react';

const LINKS = [
  { href: '#solutions', label: 'Solutions' },
  { href: '#about', label: 'About' },
  { href: '#why', label: 'Why BodhaAI' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap">
        <nav>
          <a className="logo" href="#" aria-label="BodhaAI home">
            <span className="bindu" aria-hidden="true"></span>Bodha<span className="ai">AI</span>
          </a>
          <div className="navlinks">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>
          <a className="btn btn-primary nav-cta" href="mailto:malaya@bodhaai.tech">Talk to us</a>
          <button
            className="menu-btn"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? '✕' : '☰'}
          </button>
        </nav>
      </div>
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
      </div>
    </header>
  );
}
