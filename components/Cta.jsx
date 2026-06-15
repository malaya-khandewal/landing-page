export default function Cta() {
  return (
    <div className="cta" id="contact">
      <svg className="pattern" aria-hidden="true" width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <pattern id="bindu-cta" width="56" height="56" patternUnits="userSpaceOnUse">
            <circle cx="28" cy="28" r="1.6" fill="#fff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bindu-cta)" />
      </svg>
      <div className="inner reveal">
        <h2>Ready to build with AI?</h2>
        <p>
          Join pioneering organizations transforming their future with BodhaAI&apos;s intelligent
          solutions. Let&apos;s build the future together.
        </p>
        <a className="btn btn-primary" href="mailto:malaya@bodhaai.tech">
          Start a conversation <span className="arr">→</span>
        </a>
      </div>
    </div>
  );
}
