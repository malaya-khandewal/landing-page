const CAPS = ['Generative AI', 'LLMs', 'Agentic Systems', 'RAG', 'Predictive Analytics', 'Cognitive Services'];

export default function Capabilities() {
  return (
    <div className="caps">
      <div className="wrap">
        {CAPS.map((c) => (
          <span className="cap" key={c}><i></i>{c}</span>
        ))}
      </div>
    </div>
  );
}
