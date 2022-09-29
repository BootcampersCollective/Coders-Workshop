// implement Array.prototype.reduce

const add = (acc, curr) => acc + curr;


// base case
// needs to call itself

const reduce = (arr, callbackFn, init) => {
	// base case: array is empty

	// some kind of state

	const recur = (arr, callbackFn, init) => {
		if (arr[0] === undefined) {
			return init;
		}
		// callbackFn: (acc, curr) => does something with acc and curr

		const item = arr.pop();
		const newAccumulator = callbackFn(init, item)

		return recur(arr, callbackFn, newAccumulator);
	}

	/// all this here
	return recur(arr.reverse(), callbackFn, init)
}


// reimplement map with reduce


const testArr = [1, 2, 3, 4, 5]
console.log(testArr.reduce(add, 0)); // javascript built-in
console.log(reduce(testArr, add, 0)); // ours
console.log(reduce([], add, 0)); // ours
console.log(reduce(['w', 'i', 'n'], add, 0)); // ours
