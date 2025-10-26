import './App.css';
import AlgorithmCard from './components/AlgorithmCard';
import {
  reverseString, factorial, findMaxCsv, countVowels, 
  evenOrOdd, isPalindrome, fibonacci, sumToN
} from './Algorithms';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Algorithm Playground</h1>
      </header>

      <main className="app-content">
        <AlgorithmCard
          name="Reverse a String"
          example="hello"
          run={input => {
            if (!input) throw new Error("Please enter some text");
            return reverseString(input);
          }}
        />

        <AlgorithmCard
          name="Check Palindrome"
          example="racecar"
          run={input => {
            if (!input.trim()) throw new Error("Please enter some text");
            return isPalindrome(input) ? "Yes, it's a palindrome!" : "No, not a palindrome.";
          }}
        />

        <AlgorithmCard
          name="Factorial Calculator"
          example="5"
          run={input => {
            const n = Number(input);
            if (!Number.isInteger(n) || n < 0) throw new Error("Enter a non-negative integer");
            return factorial(n).toString();
          }}
        />

        <AlgorithmCard
          name="Fibonacci Number (nth)"
          example="6"
          run={input => {
            const n = Number(input);
            if (!Number.isInteger(n) || n < 0) throw new Error("Enter a non-negative integer");
            if (n > 5000) throw new Error("n is too large");
            return fibonacci(n).toString();
          }}
        />

        <AlgorithmCard
          name="Sum of Numbers 1 to N"
          example="10"
          run={input => {
            const n = Number(input);
            if (!Number.isInteger(n) || n < 0) throw new Error("Enter a non-negative integer");
            return sumToN(n).toString();
          }}
        />

        <AlgorithmCard
          name="Find Max Number"
          example="3, 7, 2, 9"
          run={input => {
            const max = findMaxCsv(input);
            if (max === null) throw new Error("Enter a valid list of numbers");
            return max.toString();
          }}
        />

        <AlgorithmCard
          name="Count Vowels"
          example="javascript"
          run={input => {
            if (!input) throw new Error("Please enter some text");
            return countVowels(input).toString();
          }}
        />

        <AlgorithmCard
          name="Even or Odd"
          example="42"
          run={input => {
            const n = Number(input);
            if (!Number.isInteger(n)) throw new Error("Enter a valid number");
            return evenOrOdd(n);
          }}
        />
      </main>
    </div>
  );
}

export default App;
