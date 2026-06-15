# BodhaAI Website — Next.js

Clean, modern, AI-forward redesign with subtle Indian roots: Bengal indigo + marigold palette,
a jaali-lattice interactive hero, and Sanskrit annotations used sparingly.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Stack

- Next.js 14 (App Router), React 18
- Plain CSS (`app/globals.css`) — no UI framework, zero extra dependencies
- Fonts via `next/font/google`: Bricolage Grotesque (display), Hanken Grotesk (body),
  Tiro Devanagari Sanskrit (Devanagari accents) — self-hosted by Next at build time

## Structure

```
app/
  layout.js        # fonts + metadata
  page.js          # assembles all sections
  globals.css      # design tokens + all styles
components/
  Header.jsx       # sticky nav + mobile menu (client)
  Hero.jsx         # interactive hero (client)
  Jaali.jsx        # interactive jaali lattice (client)
  ScrollReveals.jsx# scroll-in animations (client)
  Capabilities.jsx, About.jsx, Solutions.jsx, Why.jsx,
  Stack.jsx, Vision.jsx, Cta.jsx, Footer.jsx   # server components
```

## Hero interactions

- Cursor-following marigold glow across the section
- Staggered entrance animation on load
- Rotating headline word ("what's next / every learner / every market / every enterprise")
- Kolam panel: 3D tilt that follows the cursor, line-drawing intro, breathing core node,
  rotating orbit ring, and golden "signal" particles travelling along the kolam paths
- Magnetic CTA buttons
- Floating marigold motes in the background

All motion respects `prefers-reduced-motion`.

## Build for production

```bash
npm run build
npm start
```

Deploys as-is to Vercel, or anywhere Node runs.
