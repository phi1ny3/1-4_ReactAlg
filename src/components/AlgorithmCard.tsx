// React Component for Algorithm Cards
import React, { useState } from 'react';
import './AlgorithmCard.css';

interface AlgorithmCardProps {
  title: string;
  hint: string;
  onRun: (input: string) => string;
}

const AlgorithmCard: React.FC<AlgorithmCardProps> = ({ title, hint, onRun }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleRun = () => {
    const result = onRun(input);
    setOutput(result);
  };

  return (
    <div className="algorithm-card">
      <h2>{title}</h2>
      <input
        type="text"
        placeholder={hint}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleRun()}
        maxLength={64}
      />
      <button onClick={handleRun}>Run</button>
      <p className="output">{output}</p>
    </div>
  );
};

export default AlgorithmCard;
