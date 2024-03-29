/* Description:
Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']
 */

// My solution:

function spacey(array) {
  for (let i = 1; i < array.length; i++) {
    array[i] = array[i - 1] + array[i];
  }
  return array;
}

// Best practce:
function spacey(array) {
  let string = "";
  return array.map((e) => (string += e));
}
