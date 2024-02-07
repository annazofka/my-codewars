/* DESCRIPTION:
In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases.

Good luck! */

// My solution = model solution
function repeats(arr) {
  return arr
    .filter((elem) => arr.indexOf(elem) === arr.lastIndexOf(elem))
    .reduce((a, b) => a + b, 0);
}

//Second solution:
function repeats(arr) {
  let seen = new Set();
  let sum = 0;

  for (let v of arr) {
    if (!seen.has(v)) {
      seen.add(v);
      sum += v;
    } else {
      sum -= v;
    }
  }

  return sum;
}
