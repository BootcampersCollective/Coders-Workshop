// E.g. `some([1, 2, 3], (val) => val > 2)` should return `true`.
// E.g. `some(array, function)` should return `true`.

// some() tests whether at least one element in the array passes the test implemented by the provided function
function some(array, func) {
	// write a function tests whether at least one element in the array passes the test implemented by the provided function
	// iterate through array
	// test whatever passed in function we have on each index
	// run function at each item
		// return result?
	// can use a for loop

    for(let i = 0; i < array.length; i++) {
	// run function at each item
    // if outcome !true, ++? else 
       if(func(array[i]) === true){
        return true;
       } 
	}
	return false;
}

console.log(some([1, 2, 3], (val) => val > 2))
console.log(some([1, 2, 3], (val) => val > 3))
console.log(some([1, 2, 3], (val) => val % 2 === 0))
console.log(some([1, 3], (val) => val % 2 === 0))
console.log(some([], (val) => val > 2 ))
