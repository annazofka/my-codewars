/* DESCRIPTION:
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0] */

// My solution = model solution
function digitize(n) {
  return String(n).split("").reverse().map(Number);
}

// Model solution 1:
function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

// Model solution 2:
function digitize(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map(function (i) {
      return parseInt(i);
    });
}
