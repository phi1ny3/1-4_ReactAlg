import { useState } from 'react';

type AlgorithmCardProps = {
  name: string;
  example: string;
  run: (value: string) => string;
};

function AlgorithmCard({ name, example, run }: AlgorithmCardProps) {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [hasError, setHasError] = useState(false);

  const handleRun = () => {
    try {
      const output = run(input);
      setResult(output);
      setHasError(false);
    } catch (e) {
      setResult(e instanceof Error ? e.message : 'Error');
      setHasError(true);
    }
  };

  return (
    <section className="card">
      <h2>{name}</h2>
      <input
        type="text"
        placeholder={example}
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleRun()}
      />
      <button onClick={handleRun}>Run</button>
      <p className={`result ${hasError ? 'error' : ''}`}>{result}</p>
    </section>
  );
}

export default AlgorithmCard;
