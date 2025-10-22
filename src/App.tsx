// src/App.tsx
import React from 'react';
import AlgorithmCard from './components/AlgorithmCard';
import { STR } from './strings';
import './App.css';

// Why: Keep algorithms pure — they never touch UI.
import {
  reverseString, factorial, findMaxCsv, countVowels, evenOrOdd,
  isPalindrome, fibonacci, sumToN
} from './Algorithms';

function App() {

  return (
    <div className="app">
      <header className="app-header">
        <h1>{STR.app_name}</h1>
      </header>

      <main className="app-content">
        {/* Reverse a String */}
        <AlgorithmCard
          title={STR.title_reverse}
          hint={STR.hint_reverse}
          onRun={(input) => input ? reverseString(input) : STR.error_enter_text}
        />

        {/* Palindrome */}
        <AlgorithmCard
          title={STR.title_palindrome}
          hint={STR.hint_palindrome}
          onRun={(input) => {
            if (!input.trim()) return STR.error_enter_text;
            return isPalindrome(input) ? STR.yes_palindrome : STR.no_palindrome;
          }}
        />

        {/* Factorial */}
        <AlgorithmCard
          title={STR.title_factorial}
          hint={STR.hint_factorial}
          onRun={(input) => {
            const n = parseInt(input);
            if (!Number.isFinite(n) || n < 0) return STR.error_nonnegative;
            try {
              return factorial(n).toString();
            } catch (e: any) {
              return e?.message ?? 'Error';
            }
          }}
        />

        {/* Fibonacci */}
        <AlgorithmCard
          title={STR.title_fibonacci}
          hint={STR.hint_fibonacci}
          onRun={(input) => {
            const n = parseInt(input);
            if (!Number.isFinite(n) || n < 0) return STR.error_nonnegative;
            if (n > 5000) return 'n too large';
            try {
              return fibonacci(n).toString();
            } catch (e: any) {
              return e?.message ?? 'Error';
            }
          }}
        />

        {/* Sum to N */}
        <AlgorithmCard
          title={STR.title_sum_to_n}
          hint={STR.hint_sum_to_n}
          onRun={(input) => {
            const n = parseInt(input);
            if (!Number.isFinite(n) || n < 0) return STR.error_nonnegative;
            try {
              return sumToN(n).toString();
            } catch (e: any) {
              return e?.message ?? 'Error';
            }
          }}
        />

        {/* Find Max CSV */}
        <AlgorithmCard
          title={STR.title_max_csv}
          hint={STR.hint_max_csv}
          onRun={(input) => {
            const max = findMaxCsv(input);
            return max != null ? max.toString() : STR.error_invalid_csv;
          }}
        />

        {/* Count Vowels */}
        <AlgorithmCard
          title={STR.title_vowels}
          hint={STR.hint_vowels}
          onRun={(input) => countVowels(input).toString()}
        />

        {/* Even or Odd */}
        <AlgorithmCard
          title={STR.title_even_odd}
          hint={STR.hint_even_odd}
          onRun={(input) => {
            const n = parseInt(input);
            return !Number.isFinite(n) ? STR.error_invalid_number : evenOrOdd(n);
          }}
        />
      </main>
    </div>
  );
}

export default App;
