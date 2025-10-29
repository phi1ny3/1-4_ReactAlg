// Using spread operator for array conversion is more idiomatic than split('')
// and handles Unicode correctly
export function reverseString(s: string): string {
  return [...s].reverse().join('');
}

// Using reduce instead of a loop avoids mutable state and makes the operation
// more composable. Starting with 1n handles empty case automatically.
export function factorial(n: number): bigint {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Input must be a non-negative integer");
  }
  return n < 2 ? 1n : [...Array(n)].reduce((acc, _, i) => 
    acc * BigInt(i + 1), 1n);
}

// Method chaining with nullish coalescing provides cleaner error handling
// than explicit length checks and intermediate variables
export function findMaxCsv(csv: string): number | null {
  return csv.split(',')
    .map(s => s.trim())
    .map(Number)
    .filter(n => !Number.isNaN(n))
    .reduce((max, n) => Math.max(max, n), -Infinity) ?? null;
}

// Filter and length is more direct than counting with reduce
// when we just want to count matching elements
export function countVowels(s: string): number {
  return [...s.toLowerCase()].filter(c => 'aeiou'.includes(c)).length;
}

// Bitwise AND with 1 is faster than modulo and more explicitly shows
// we're checking the least significant bit
export function evenOrOdd(n: number): string {
  return (n & 1) === 0 ? "Even" : "Odd";
}

// Single comparison of forward/reverse is cleaner than checking pairs
// and regex is more maintainable than character range checks
export function isPalindrome(s: string): boolean {
  const chars = [...s.toLowerCase()]
    .filter(c => /[a-z0-9]/.test(c));
  return chars.join('') === chars.reverse().join('');
}

// Using reduce with a tuple lets us track state immutably
// while avoiding array allocations or recursive calls
export function fibonacci(n: number): bigint {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Input must be a non-negative integer");
  }
  if (n < 2) return BigInt(n);
  
  return [...Array(n)].reduce<[bigint, bigint]>(
    ([a, b]) => [b, a + b], 
    [0n, 1n]
  )[0];
}

// Using the arithmetic series formula is O(1) and more efficient
// than any iterative or recursive approach
export function sumToN(n: number): bigint {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Input must be a non-negative integer");
  }
  const N = BigInt(n);
  return (N * (N + 1n)) / 2n;
}
