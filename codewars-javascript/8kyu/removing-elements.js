/* DESCRIPTION:
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that! */

//My solution:
function removeEveryOther(arr) {
  return arr.filter((elem, index) => index % 2 === 0);
}

//  Model solution:
function removeEveryOther(arr) {
  return arr.filter(function (elem, index) {
    return index % 2 === 0;
  });
}

//Model solution with 'push':
function removeEveryOther(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}

// Model solution with splice:
function removeEveryOther(arr) {
  //your code here
  for (var i = 1; i < arr.length; i++) {
    arr.splice(i, 1);
  }
  return arr;
}
