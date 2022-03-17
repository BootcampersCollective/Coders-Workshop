// Write a function that compares two arrays by returning all elements present in the first array that are not present in the second.

// For example, given `[1, 2, 3, 4, 5, 0]` and `[2, 4]` return `[1, 3, 5]`. Given `[1, 2, 3, 4, 5]` and `[6, 7]` return `[1, 2, 3, 4, 5]`.

// make the second array a set
// look through the first one, see if it's in the set
// if it is, exclude from result, otherwise include
// or if we're in Py, we can just use the built-in

// sets are nice b/c: we don't have to step through everything
// and because sets are hashed, so we don't have to look through every item
// it's like a dictionary, but with keys!
// it also de-duplicates the items

function diff(arr1, arr2) {
	const bSet = new Set(arr2);

	return arr1.filter((item) => {
		if (!bSet.has(item)) {
			return item;
		}	
	})
}

// this one is better because it doesn't make assumptions
// about the truthiness of the items
const diff2 = function(arr1, arr2) {
	const arr2Set = new Set(arr2);
	return arr1.filter(item => !arr2Set.has(item))
}

console.log(diff([1, 2, 3, 4, 5, 0], [2, 4]))
console.log(diff2([1, 2, 3, 4, 5, 0], [2, 4]))
