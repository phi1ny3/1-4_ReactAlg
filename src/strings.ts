// Why: Centralize strings (React equivalent of strings.xml); future-ready for i18n.
export const STR = {
  app_name: 'Oops, All Algorithms!',
  btn_run: 'Run',

  error_enter_text: 'Please enter some text',
  error_invalid_number: 'Please enter a valid number',
  error_nonnegative: 'Number must be non-negative',
  error_invalid_csv: 'Enter a valid comma-separated list of numbers',

  title_reverse: 'Reverse a String',
  hint_reverse: 'hello',

  title_factorial: 'Factorial (n!)',
  hint_factorial: '5',

  title_palindrome: 'Check Palindrome',
  hint_palindrome: 'Race car',
  yes_palindrome: 'Yes, it is a palindrome!',
  no_palindrome: 'No, not a palindrome.',

  title_max_csv: 'Find Max Number (CSV)',
  hint_max_csv: '3, 7, 2, 9',

  title_vowels: 'Count Vowels',
  hint_vowels: 'javascript',

  title_fibonacci: 'Fibonacci Number (n, 0-indexed)',
  hint_fibonacci: '6',

  title_sum_to_n: 'Sum of Numbers 1..N',
  hint_sum_to_n: '10',

  title_even_odd: 'Even or Odd',
  hint_even_odd: '42',
} as const;
