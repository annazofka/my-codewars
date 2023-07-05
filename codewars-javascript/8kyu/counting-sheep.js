/* Description:
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

The correct answer would be 17. */

// My solution:
function countSheeps(arrayOfSheep) {
  let numberOfSheep = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      numberOfSheep++;
    }
  }
  return numberOfSheep;
}

//  Model solution 1:
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

// Model solution 2:
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  var num = 0;

  for (var i = 0; i < arrayOfSheep.length; i++)
    if (arrayOfSheep[i] == true) num++;

  return num;
}

// Model solution 3 using .reduce:
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce(function (result, current) {
    if (current) result++;
    return result;
  }, 0);
}

// Model solution using forEach:
function countSheeps(arrayOfSheep) {
  var count = 0;

  arrayOfSheep.forEach(function (sheep) {
    if (sheep) count++;
  });

  return count;
}
