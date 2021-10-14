// implement filter with reduce

// higher order functions: accept other functions as arguments
// filter: "other function" is called a predicate -> function that takes an input and returns true/false
// reduce: "other function" is called a reducer -> function that takes an accumulator and a current value and returns some value`

function predicate (val) {
	if (val < 3) {
		return true
	}
	return false
}

function reducer(accumulator, currentValue) {
	return accumulator + currentValue
}

// [1, 2, 3, 4, 5] call reduce, return a filtered array with only items less than 3

function filterWithReduce(arr, pred) {
	arr.reduce()
}
