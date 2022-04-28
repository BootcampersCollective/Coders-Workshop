const assert = require('assert');

// Make this test pass
// ```js
// assert.deepStrictEqual(flattenAndSort([[1, 2, 3], [5, [4]], [], [8, 7, 9, 6]]), [1, 2, 3, 4, 5, 6, 7, 8, 9])
// ```
// Array.prototype.isArray() -- know if we need to pop it out of the array and add to parent
// first flatten then sort, or first sort each array as a chunk and flatten?
// walk through array and spread each element into a result, keep track of if any of those aren't arrays, if none are, we're done (recursive approach)
// [[1, 2, 3], [5, [4]], [], [8, 7, 9, 6]]
// javascript flat
// [].flat(Infinity)
// create result/parent array
// walk through array: if item is not array, add item to parent, if it is array
// at any point, keep track of whether any item was an array, repeat iteration
// we're done when there are no arrays
// a flag to indicate whether there are any arrays result array, use flag to determine if we need to keep going
const arr = [1, 2, 3]
// arr2 = [...arr]
// Math.max(...arr)

function flatten(arr) {
	let flatFlag = true
	let result = []
	for (i = 0; i< arr.length; i++) {
		if (Array.isArray(arr[i])) {
			flatFlag = false;
			result.push(...arr[i])
		} else {
			result.push(arr[i])
		}
	}
	return [ flatFlag, result ]
}

function flattenAndSort(arr) {
	let flag = false;
	let result = arr;
	while (!flag) {
		const [ flatFlag, tmpResult ] = flatten(result);
		flag = flatFlag;
		result = tmpResult;
	}
	return result.sort();
}

// from Suma:
function flattenAndSortImperative(arr) {
	const res = [];

	for(let i=0; i<arr.length; i++) {
		for(let j=0; j<arr[i].length; j++) {
			if( typeof arr[i][j] != 'object')
				res.push(arr[i][j]);
			else 
				res.push(...arr[i][j])
		}
	}
}

assert.deepStrictEqual(
	flattenAndSort([[1, 2, 3], [5, [4]], [], [8, 7, 9, 6]]),
	[1, 2, 3, 4, 5, 6, 7, 8, 9]
	)

console.log('👍')


/* recursive solution: from Dom */
// function flattenAndSort(array) {
// 	const result = [];
// 	const helper = (arr) => {
// 	  for (let i = 0; i < arr.length; i++) {
// 		if (!Array.isArray(arr[i])) {
// 		  result.push(arr[i]);
// 		} else {
// 		  arr[i].sort();
// 		  helper(arr[i]);
// 		}
// 	  }
// 	};
  
// 	helper(array);
// 	return result;
//   }
