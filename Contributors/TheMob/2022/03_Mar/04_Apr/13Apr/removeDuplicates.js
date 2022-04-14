// Write a function that takes an array and returns an array with the left-most duplicates removed.
// The array could be comprised of numbers or string characters, and characters should be treated as case-sensitive.

// For example, given `[1, 3, 3, 4, 7, 1]`, your function should return `[3, 4, 7, 1]`, since the first `1` and `3` are left-most duplicates.
// Given `['a', 'r', 'p', 'a', 'g', 'g']`, return `['r', 'p', 'a', 'g']`

// how can we get rid of duplicates?
// walk through the array backwards, keep track of things we've seen
// if value is in set, remove it

const removeLeftmostDuplicates = (arr) => {
	// walk through the array backwards, keep track of things we've seen
	const set = new Set();
	const result = [];

	for (let i = arr.length - 1; i >= 0; i--) {
		// if value is not in set, remove it
		if (!set.has(arr[i])) {
			result.push(arr[i]);
			set.add(arr[i]);
		}
	}
	return result.reverse();
}

console.log(removeLeftmostDuplicates(['a', 'r', 'p', 'a', 'g', 'g']))
console.log(removeLeftmostDuplicates([1, 3, 3, 4, 7, 1]))

