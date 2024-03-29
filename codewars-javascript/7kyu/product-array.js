// Description:
/* Task
Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

Notes
Array/list size is at least 2 .

Array/list's numbers Will be only Positives

Repetition of numbers in the array/list could occur.
 */

// My solution:

function productArray(numbers) {
  return numbers.map((el) => numbers.reduce((a, b) => a * b) / el, 1);
}

//Other solutions:
function productArray(numbers) {
  let newarr = [];
  let mult = numbers.reduce((a, b) => a * b);

  for (let i = 0; i < numbers.length; i++) {
    newarr.push(mult / numbers[i]);
  }

  return newarr;
}
