/* DESCRIPTION:
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 */

// My latest solution:
function squareSum(numbers) {
  return numbers.reduce((acc, curr) => (acc += curr ** 2), 0);
}

// My first solution:
function squareSum(numbers) {
  let squareSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    squareSum += Math.pow(numbers[i], 2);
  }
  return squareSum;
}

// Model solution using 'reduce' method:
function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}
// Model solution 2 using 'reduce' method:
function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + num * num, 0);
}

// Model solution using forEach:
function squareSum(numbers) {
  var sum = 0;
  numbers.forEach(function (n) {
    sum += n * n;
  });
  return sum;
}
