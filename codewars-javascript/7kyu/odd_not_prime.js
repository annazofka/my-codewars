/* // Instructions

For "x", determine how many positive integers less than or equal to "x" are odd but not prime. Assume "x" is an integer between 1 and 10000.

Example: 5 has three odd numbers (1,3,5) and only the number 1 is not prime, so the answer is 1

Example: 10 has five odd numbers (1,3,5,7,9) and only 1 and 9 are not prime, so the answer is 2 */

// My solution:
function oddNotPrime(n) {
  let count = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 3; j < n; j++) {
      if (i !== j && i % j === 0 && i % 2 !== 0) {
        count += 1;
        break;
      }
    }
  }

  return count;
}
// Model solution:
function isPrime(n) {
  if (n <= 2) return false;
  for (var i = 3; i < n; i++) {
    if (n % i == 0 || n % 2 == 0) return false;
  }
  return true;
}

function oddNotPrime(n) {
  var count = 0;
  for (var i = 1; i <= n; i++) {
    if (i % 2 != 0 && !isPrime(i)) count += 1;
  }
  return count;
}
