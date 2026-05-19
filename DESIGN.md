---
name: Bodha AI
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#464653'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#767684'
  outline-variant: '#c6c5d5'
  surface-tint: '#4b53bc'
  primary: '#00003c'
  on-primary: '#ffffff'
  primary-container: '#000080'
  on-primary-container: '#777eea'
  inverse-primary: '#bfc2ff'
  secondary: '#8f4e00'
  on-secondary: '#ffffff'
  secondary-container: '#fe9832'
  on-secondary-container: '#683700'
  tertiary: '#0a0c0a'
  on-tertiary: '#ffffff'
  tertiary-container: '#212220'
  on-tertiary-container: '#898986'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e0e0ff'
  primary-fixed-dim: '#bfc2ff'
  on-primary-fixed: '#00006e'
  on-primary-fixed-variant: '#3239a3'
  secondary-fixed: '#ffdcc2'
  secondary-fixed-dim: '#ffb77a'
  on-secondary-fixed: '#2e1500'
  on-secondary-fixed-variant: '#6d3a00'
  tertiary-fixed: '#e3e2df'
  tertiary-fixed-dim: '#c7c7c3'
  on-tertiary-fixed: '#1b1c1a'
  on-tertiary-fixed-variant: '#464744'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system embodies the intersection of ancient wisdom and futuristic intelligence. The visual narrative is built upon a **Modern-Premium** foundation with a **Subtle Indian Aesthetic**, prioritizing a "tech-first" spirit that remains culturally grounded. 

The aesthetic leverages **Minimalism** punctuated by **Glassmorphism**. High-end tech visuals—such as delicate linework and glowing neural accents—are balanced by organic architectural influences like modern Jaali patterns used as light, mathematically precise background overlays. The emotional goal is to evoke a sense of calm authority, intellectual depth, and cutting-edge innovation.

## Colors

The palette is anchored in **Navy Blue** (Indigo), providing a foundation of authority and digital sophistication. **Deep Saffron** is used with extreme precision as a high-intent accent color, highlighting key actions or AI-driven insights without overwhelming the interface. 

The background uses **Lotus White** (#FDFCF8), a warm, premium cream that offers more depth and luxury than standard white. Neutral tones are derived from the Navy base to maintain a cohesive, high-contrast professional environment.

- **Primary (Indigo):** Authority, Trust, Depth.
- **Accent (Deep Saffron):** Intelligence, Energy, Precision.
- **Surface (Lotus White):** Calm, Purity, Luxury.

## Typography

The system utilizes a dual-sans approach to maintain a contemporary tech feel while adding character. **Plus Jakarta Sans** is used for headings; its geometric clarity and subtle curves offer a welcoming yet professional "innovation" vibe. 

**Inter** serves as the utilitarian workhorse for body copy and labels, ensuring maximum readability and a systematic, neutral feel for dense AI data. For editorial moments, headings may use increased letter spacing to evoke a more premium, "gallery-like" layout.

## Layout & Spacing

This design system employs a **Fixed Grid** for desktop (12 columns) and a **Fluid Grid** for mobile (4 columns). The spacing philosophy is "Airy and Intentional," using a base-8 scale to ensure rhythmic consistency.

Large-scale layouts should favor asymmetrical balance to feel modern and dynamic. Substantial white space (Lotus White) is critical to prevent the Navy and Saffron from feeling heavy. Background overlays of geometric Jaali patterns should be restricted to margins or specific section backgrounds at low opacity (3-5%).

## Elevation & Depth

Hierarchy is established through **Glassmorphism** and **Tonal Layers**. Rather than traditional heavy drop shadows, the system uses "Ambient Glows"—soft, diffused shadows tinted with a hint of the primary Navy color.

1. **Base:** Lotus White surface.
2. **Surface (Raised):** White with a 1px Indigo-tinted stroke at 10% opacity.
3. **Glass (Floating):** Semi-transparent white (blur: 20px) with a subtle "inner glow" border to simulate light hitting the edge of a lens.
4. **AI Highlight:** Subtle radial gradients behind key components using a desaturated Saffron glow to draw the eye.

## Shapes

The shape language is **Soft and Balanced**. Standard elements use a 0.5rem (8px) radius to feel modern and approachable. Containers that house AI-generated content or primary cards should use `rounded-xl` (1.5rem) to emphasize the "Glassmorphic" container feel. Circular elements are reserved for avatars and specific AI status indicators.

## Components

### Buttons
- **Primary:** Solid Navy Blue with white text. High-contrast, sharp, and authoritative.
- **Secondary:** Transparent with a Navy 1.5px border.
- **AI-Action:** Deep Saffron background with Navy text, reserved for "Generate" or "Analyze" moments.

### Cards
Cards are the primary vehicle for the "modern Jaali" aesthetic. They use a Glassmorphic background with a very subtle 1px border. Inside, padding is generous (minimum 32px) to maintain the premium feel.

### Input Fields
Inputs are minimalist—bottom border only in default state, transitioning to a full-perimeter Navy stroke with a subtle Saffron "glow" shadow when focused.

### AI Indicators
Use "Neural Lines"—1px wide paths with a moving gradient light—to indicate background processing or data flow.

### Chips
Small, high-radius (pill) shapes using desaturated Indigo backgrounds with Navy text for categorizing data or metadata tags.