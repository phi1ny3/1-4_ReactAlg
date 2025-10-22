// src/Algorithms.ts
// Why: Keep algorithm layer pure and testable. No UI, no I/O side effects.

export function reverseString(s: string): string {
  return s.split('').reverse().join('');
}

export function factorial(n: number): bigint {
  // Why: Fail fast on invalid input so callers can't silently compute nonsense.
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Input must be a non-negative integer");
  }
  let result = 1n;
  for (let i = 2n; i <= BigInt(n); i++) result *= i;
  return result;
}

export function findMaxCsv(csv: string): number | null {
  // Why: Sanitize inputs defensively; ignore non-numeric tokens.
  const nums = csv
    .split(',')
    .map(s => parseFloat(s.trim()))
    .filter(n => Number.isFinite(n));
  return nums.length ? Math.max(...nums) : null;
}

export function countVowels(s: string): number {
  // Why: Normalize case to avoid misses.
  return [...s.toLowerCase()].filter(c => 'aeiou'.includes(c)).length;
}

export function evenOrOdd(n: number): string {
  // Why: Bitwise parity is simple and fast.
  return (n & 1) === 0 ? "Even" : "Odd";
}

export function isPalindrome(s: string): boolean {
  // Why: Normalize (strip spaces/punct & lowercase) so “Taco cat!” returns true.
  const norm = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return norm === reverseString(norm);
}

export function fibonacci(n: number): bigint {
  // Why: Iterative BigInt avoids recursion overhead and number overflow.
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Input must be a non-negative integer");
  }
  if (n === 0) return 0n;
  if (n === 1) return 1n;
  let a = 0n, b = 1n;
  for (let i = 2; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }
  return b;
}

export function sumToN(n: number): bigint {
  // Why: O(1) arithmetic series formula, using BigInt for safety.
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Input must be a non-negative integer");
  }
  const N = BigInt(n);
  return (N * (N + 1n)) / 2n;
}
