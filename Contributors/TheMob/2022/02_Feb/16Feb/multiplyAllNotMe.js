// Given an array of integers, return a new array such that each element at index i of the new array is the product of all
// the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// get a product of all the numbers (reduce), divide by the current number

function multiplyAllNotMe (arr) {
	const product = arr.reduce((acc, curr) => acc * curr, 1)

	return arr.map((element) => product / element)
}

console.log(multiplyAllNotMe([1, 2, 3, 4, 5]))
console.log(multiplyAllNotMe([]))
