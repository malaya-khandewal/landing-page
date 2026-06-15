const STACK = ['Python', 'PyTorch', 'LangChain', 'Llama 3', 'OpenAI', 'AWS'];

export default function Stack() {
  return (
    <div className="stack">
      <div className="wrap">
        <span className="label">Driven by world-class technology</span>
        <ul>
          {STACK.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </div>
    </div>
  );
}
