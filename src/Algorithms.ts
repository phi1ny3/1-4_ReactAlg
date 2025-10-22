//  Keep algorithm layer pure and simple.  Avoiding var and mutable state where possible.

export function reverseString(s: string): string {
  return s.split('').reverse().join('');
}

export function factorial(n: number): bigint {
  // Fail fast on invalid input so callers can't silently compute nonsense.
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Input must be a non-negative integer");
  }
  return Array.from({ length: n - 1 }, (_, i) => BigInt(i + 2)).reduce((acc, i) => acc * i, 1n);
}

export function findMaxCsv(csv: string): number | null {
  // Parses CSV string, ignoring invalid numbers. NaN is not considered finite.
  const numbers = csv.split(',').map(s => parseFloat(s.trim())).filter(n => Number.isFinite(n));
  return numbers.length === 0 ? null : numbers.reduce((max, n) => Math.max(max, n), -Infinity);
}

export function countVowels(s: string): number {
  // Simple vowel counting, case insensitive.
  return Array.from(s.toLowerCase()).reduce((count, c) => count + ('aeiou'.includes(c) ? 1 : 0), 0);
}

export function evenOrOdd(n: number): string {
  //  Bitwise parity is simple and fast.
  return (n & 1) === 0 ? "Even" : "Odd";
}

export function isPalindrome(s: string): boolean {
  //  Normalize (strip spaces/punct & lowercase the phrase) so something like "Taco cat!" returns true.
  const filtered = Array.from(s.toLowerCase()).filter(c => (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9'));
  const half = Math.floor(filtered.length / 2);
  return Array.from({ length: half }, (_, i) => i).every(i => filtered[i] === filtered[filtered.length - 1 - i]);
}

export function fibonacci(n: number): bigint {
  //  Iterative BigInt avoids recursion overhead and number overflow.
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Input must be a non-negative integer");
  }
  if (n === 0) return 0n;
  if (n === 1) return 1n;
  return Array.from({ length: n }, (_, idx) => idx).reduce<[bigint, bigint]>(([a, b], _) => [b, a + b], [0n, 1n])[0];
}

export function sumToN(n: number): bigint {
  //  O(1) arithmetic series formula, using BigInt for safety.
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Input must be a non-negative integer");
  }
  const N = BigInt(n);
  return (N * (N + 1n)) / 2n;
}
