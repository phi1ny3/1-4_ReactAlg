// React Component for Algorithm Cards
import React, { useState } from 'react';

interface AlgorithmCardProps {
  title: string;
  hint: string;
  onRun: (input: string) => string;
}

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    marginBottom: '1rem',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    background: '#FFFFFF', // colorSurface
    border: '1px solid #EEEEEE' // colorSurfaceVariant for subtle border
  },
  title: {
    marginBottom: '1rem',
    fontSize: '1.25rem',
    color: '#212121' // colorOnSurface
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '0.5rem',
    border: '1px solid #9E9E9E', // colorOutline
    borderRadius: '4px',
    color: '#212121', // colorOnSurface
    backgroundColor: '#EEEEEE' // colorSurfaceVariant for input background
  },
  button: {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    background: '#CDEECF', // colorPrimaryContainer
    color: '#08320A', // colorOnPrimaryContainer
    cursor: 'pointer'
  },
  output: {
    marginTop: '1rem',
    fontWeight: 'bold',
    wordBreak: 'break-word' as const,
    color: '#250E67' // colorOnTertiaryContainer
  }
};

const AlgorithmCard: React.FC<AlgorithmCardProps> = ({ title, hint, onRun }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleRun = () => {
    const result = onRun(input);
    setOutput(result);
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
      <input
        style={styles.input}
        type="text"
        placeholder={hint}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleRun()}
        maxLength={64}
      />
      <button 
        style={styles.button}
        onClick={handleRun}
      >
        Run
      </button>
      <p style={styles.output}>{output}</p>
    </div>
  );
};

export default AlgorithmCard;
