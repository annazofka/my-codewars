/* Instructions:

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square */

// My solution:

function findNextSquare(sq) {
  let perfectSquare = Math.sqrt(sq);
  if (perfectSquare === Math.round(perfectSquare)) {
    return Math.pow(perfectSquare + 1, 2);
  }
  return -1;
}

// Best practice:
function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}
