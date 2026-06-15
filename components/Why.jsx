const PILLARS = [
  {
    dev: 'विस्तार',
    title: 'Scalable architecture',
    text: 'Built to grow with your data — from a focused pilot to production-grade deployment, without rework.',
  },
  {
    dev: 'प्रयोग',
    title: 'Research + practicality',
    text: "We don't just innovate. We implement solutions that deliver tangible, measurable ROI from day one.",
  },
  {
    dev: 'मानव',
    title: 'Human-centric AI',
    text: 'An ethics-first approach, ensuring AI augments human potential rather than replacing it.',
  },
];

function BinduPattern() {
  return (
    <svg className="pattern" aria-hidden="true" width="100%" height="100%" preserveAspectRatio="none">
      <defs>
        <pattern id="bindu" width="56" height="56" patternUnits="userSpaceOnUse">
          <circle cx="28" cy="28" r="1.6" fill="#fff" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bindu)" />
    </svg>
  );
}

export default function Why() {
  return (
    <section className="why" id="why">
      <BinduPattern />
      <div className="wrap">
        <span className="eyebrow">Why BodhaAI</span>
        <h2>Research-grade thinking,<br />production-grade delivery</h2>
        <div className="why-grid">
          {PILLARS.map((p) => (
            <div className="why-item reveal" key={p.title}>
              <span className="dev">{p.dev}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
