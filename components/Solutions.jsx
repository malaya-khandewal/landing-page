const SOLUTIONS = [
  {
    tag: '01 · Education',
    title: 'AI for Education',
    text: 'Next-gen platforms for universities, personalized JEE/NEET assessment engines, and dedicated AI tutors that adapt to every learner.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 3L2 8l10 5 10-5-10-5z" />
        <path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" />
      </svg>
    ),
  },
  {
    tag: '02 · Finance',
    title: 'Financial Markets',
    text: 'High-frequency analytics, sentiment intelligence from news cycles, and predictive market modeling for agile decisioning.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 17l5-6 4 3 6-8" />
        <path d="M21 21H3V3" />
      </svg>
    ),
  },
  {
    tag: '03 · Voice & Text',
    title: 'Conversational AI',
    text: "Human-like interactions across voice and text — advanced voice agents and multilingual speech analytics for India's many tongues.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M21 12a8 8 0 10-3.1 6.3L21 19l-.7-3.4A8 8 0 0021 12z" />
        <path d="M8 11h8M8 14h5" />
      </svg>
    ),
  },
  {
    tag: '04 · Enterprise',
    title: 'Enterprise AI',
    text: 'Operations automation, intelligent chatbots for BFSI, and cognitive document processing for healthcare compliance.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 21V5a1 1 0 011-1h8a1 1 0 011 1v16" />
        <path d="M14 9h5a1 1 0 011 1v11" />
        <path d="M4 21h17M8 8h2M8 12h2M8 16h2" />
      </svg>
    ),
  },
];

export default function Solutions() {
  return (
    <section id="solutions">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <span className="eyebrow">Core solutions</span>
            <h2>Tailored AI for real-world complexity</h2>
          </div>
          <p>
            Purpose-built architectures across diverse industry verticals — designed with
            practitioners, deployed at scale.
          </p>
        </div>
        <div className="cards">
          {SOLUTIONS.map((s) => (
            <article className="card reveal" key={s.title}>
              <span className="tag">{s.tag}</span>
              <div className="glyph">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
