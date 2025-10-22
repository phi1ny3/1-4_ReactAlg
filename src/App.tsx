// src/App.tsx
import React, { useState } from 'react';
import {
  Container, Card, CardContent, TextField, Button, Typography, AppBar, Toolbar
} from '@mui/material';

// Why: Keep algorithms pure — they never touch UI.
import {
  reverseString, factorial, findMaxCsv, countVowels, evenOrOdd,
  isPalindrome, fibonacci, sumToN
} from './Algorithms';

function App() {
  // Why: Each field isolated; state co-located for simplicity.
  const [reverseInput, setReverseInput] = useState('');
  const [reverseOutput, setReverseOutput] = useState('');

  const [factorialInput, setFactorialInput] = useState('');
  const [factorialOutput, setFactorialOutput] = useState('');

  const [maxCsvInput, setMaxCsvInput] = useState('');
  const [maxCsvOutput, setMaxCsvOutput] = useState('');

  const [vowelsInput, setVowelsInput] = useState('');
  const [vowelsOutput, setVowelsOutput] = useState('');

  const [evenOddInput, setEvenOddInput] = useState('');
  const [evenOddOutput, setEvenOddOutput] = useState('');

  const [palInput, setPalInput] = useState('');
  const [palOutput, setPalOutput] = useState('');

  const [fibInput, setFibInput] = useState('');
  const [fibOutput, setFibOutput] = useState('');

  const [sumInput, setSumInput] = useState('');
  const [sumOutput, setSumOutput] = useState('');

  // Why: Keeps UI mapping consistent with Android XML layout.
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Oops, All Algorithms!</Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ my: 3 }}>
        {/* Reverse a String */}
        <AlgorithmCard
          title="Reverse a String"
          hint="hello"
          input={reverseInput}
          setInput={setReverseInput}
          output={reverseOutput}
          onRun={() =>
            setReverseOutput(reverseInput ? reverseString(reverseInput) : 'Enter text')
          }
        />

        {/* Palindrome */}
        <AlgorithmCard
          title="Palindrome?"
          hint="Taco cat"
          input={palInput}
          setInput={setPalInput}
          output={palOutput}
          onRun={() => {
            if (!palInput.trim()) { setPalOutput('Enter text'); return; }
            setPalOutput(isPalindrome(palInput) ? 'Yes' : 'No');
          }}
        />

        {/* Factorial */}
        <AlgorithmCard
          title="Factorial (n!)"
          hint="5"
          input={factorialInput}
          setInput={setFactorialInput}
          output={factorialOutput}
          onRun={() => {
            const n = parseInt(factorialInput);
            if (!Number.isFinite(n) || n < 0) { setFactorialOutput('Enter non-negative integer'); return; }
            try {
              setFactorialOutput(factorial(n).toString());
            } catch (e: any) {
              setFactorialOutput(e?.message ?? 'Error');
            }
          }}
        />

        {/* Fibonacci */}
        <AlgorithmCard
          title="Fibonacci (n)"
          hint="10"
          input={fibInput}
          setInput={setFibInput}
          output={fibOutput}
          onRun={() => {
            const n = parseInt(fibInput);
            if (!Number.isFinite(n) || n < 0) { setFibOutput('Enter non-negative integer'); return; }
            // Why: BigInt grows rapidly; soft-cap large n to prevent UI stalls.
            if (n > 5000) { setFibOutput('n too large'); return; }
            try {
              setFibOutput(fibonacci(n).toString());
            } catch (e: any) {
              setFibOutput(e?.message ?? 'Error');
            }
          }}
        />

        {/* Sum to N */}
        <AlgorithmCard
          title="Sum 1..N"
          hint="100"
          input={sumInput}
          setInput={setSumInput}
          output={sumOutput}
          onRun={() => {
            const n = parseInt(sumInput);
            if (!Number.isFinite(n) || n < 0) { setSumOutput('Enter non-negative integer'); return; }
            try {
              setSumOutput(sumToN(n).toString());
            } catch (e: any) {
              setSumOutput(e?.message ?? 'Error');
            }
          }}
        />

        {/* Find Max CSV */}
        <AlgorithmCard
          title="Find Max Number (CSV)"
          hint="3, 7, 2, 9"
          input={maxCsvInput}
          setInput={setMaxCsvInput}
          output={maxCsvOutput}
          onRun={() => {
            const max = findMaxCsv(maxCsvInput);
            setMaxCsvOutput(max != null ? max.toString() : 'Invalid CSV');
          }}
        />

        {/* Count Vowels */}
        <AlgorithmCard
          title="Count Vowels"
          hint="javascript"
          input={vowelsInput}
          setInput={setVowelsInput}
          output={vowelsOutput}
          onRun={() => setVowelsOutput(countVowels(vowelsInput).toString())}
        />

        {/* Even or Odd */}
        <AlgorithmCard
          title="Even or Odd"
          hint="42"
          input={evenOddInput}
          setInput={setEvenOddInput}
          output={evenOddOutput}
          onRun={() => {
            const n = parseInt(evenOddInput);
            setEvenOddOutput(!Number.isFinite(n) ? 'Enter valid number' : evenOrOdd(n));
          }}
        />
      </Container>
    </>
  );
}

// Why: UI helper component for consistency.
interface AlgorithmCardProps {
  title: string;
  hint: string;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  output: string;
  onRun: () => void;
}

const AlgorithmCard: React.FC<AlgorithmCardProps> = ({ title, hint, input, setInput, output, onRun }) => (
  <Card sx={{ mb: 2, p: 1, borderRadius: 2, boxShadow: 3 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder={hint}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onRun()}
        inputProps={{ maxLength: 64 }}
        sx={{ mb: 1 }}
      />
      <Button variant="outlined" onClick={onRun}>Run</Button>
      <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 'bold', wordBreak: 'break-word' }}>
        {output}
      </Typography>
    </CardContent>
  </Card>
);

export default App;
