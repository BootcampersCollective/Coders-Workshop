// For example, with array `[1, 2, 3, 4, 5]`, filter `(x) => (x < 4)`, and map `(x) => x * 2`, filterMap should return `[2, 4, 6]`.

// loop
	// call the callback function(s)
	// filter first
		// if true call the callback function of map
		// have new array, push result of callback function into new array

	// return the new array
    // you can do it in one line
// arr.filter((x) => x < 4).map((x) => x * 2)


function filterMap(array, mapper, filter){
	const newArray = []
	array.forEach(element => {
		if(filter(element)){
			newArray.push(mapper(element))
		}
	})

	return newArray
}

function double(x) {
	return x * 2
}
function lessThanFour(x){
    // return x < 4 ? true : false
    // if (x < 4) return true
	return x < 4
}

console.log(filterMap([1, 2, 3, 4, 5], double, lessThanFour)) // [2, 4, 6]
console.log(filterMap([], double, lessThanFour)) // []
