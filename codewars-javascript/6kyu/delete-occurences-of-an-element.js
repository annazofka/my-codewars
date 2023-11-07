/* Instructions:
Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].

 */

// My solution:
function deleteNth(arr, n) {
	// create an empty array to store the result of the function
	const result = [];
	// iterate through each element of arr and then execute the code inside the loop for each elem one by one
	for (let elem of arr) {
		// declare a new variable called 'occurence' to store the result of filter method in a new array and check its length.
		// Return true if current elem of arr in the loop is equal to any of the 'item'(s) of 'result' array. Then calculate the length of the filtered array. This effectively counts how many times elem appears in the 'result' array.
		const occurence = result.filter(item => item === elem).length;
		// check if occurrence exists and if it's equal to n
		if (occurence && occurence === n) {
			// if occurrence equals n skip the current iteration of the loop and move to the next element in arr
			continue;
		} else {
			// if statement is not met, push the current element 'elem' into the result array
			result.push(elem);
		}
	}
	return result;
}

deleteNth([20, 21, 36, 21, 22, 36], 1);

// 1st iteration
// elem will be 20, but the 'result' array is empty so filter will result in undefined which is falsy. The occurence array will therefore be [].length so 0. In the if statement, 0 will evaluate to false and occurence === n will also evaluate to false, so the elem will be pushed to the result array.

// 4th iteration
// elem will be 21, but after filter the length of 'occurence' array will be 1 i.e. [21].length

// Model solution:
function deleteNth(arr, x) {
	// Create an empty object to store how many times each object exists
	var cache = {};
	return arr.filter(function (n) {
		cache[n] = (cache[n] || 0) + 1;
		return cache[n] <= x;
	});
}

// In the first iteration, n will be 1, and cache will be equal to {}, so cache[n] will be undefined. It is setting it to (cache[num] || 0) which means if cache[num] OR 0. As cache[num] is undefined in the first instance, it'll be 0. It is then adding 1. Each time the number is hit, it is adding one, and then it will return if the number of instances is below or equal the accepted number.When it goes above that threshold, it'll be equal to false and now it won't be included as part of the filter.

// Model solution 2:
const deleteNth = (a, x) => {
	let m = {};
	return a.filter(v => (m[v] = m[v] + 1 || 1) <= x);
};

// Model solution 3:
function deleteNth(arr, x) {
	var obj = {};
	return arr.filter(function (number) {
		obj[number] = obj[number] ? obj[number] + 1 : 1;
		return obj[number] <= x;
	});
}

// My favourite solution:
function deleteNth(arr, n) {
	const sorted = {};

	return arr.filter(e => {
		if (sorted[e]) {
			sorted[e].push(e);
			return sorted[e].length > n ? null : e;
		} else {
			sorted[e] = [e];
			return e;
		}
	});
}
