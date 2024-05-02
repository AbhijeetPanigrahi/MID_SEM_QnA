/*
Write a JavaScript function that takes an array of numbers and
returns a new array with only the prime numbers.
*/

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

function filterPrimes(arr) {
  return arr.filter(isPrime);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = filterPrimes(numbers);

console.log(primeNumbers); // Output: [2, 3, 5, 7]
