// The `take` function accepts an integer `n` and an array `arr` and returns a new array with the first `n` elements of `arr`.
// For example, `take(2, [1, 2, 3, 4, 5])` should return `[1, 2]`.


// Array.Prototype.slice
// create function that accepts two params (int and arr)
// iterate over array, stop before we reach n
// add element to return array

const take = (n) => (arr) => {
		if(arr.length < n) return arr;
		const result=[];
		for (let index = 0; index < n; index++) {
			result.push(arr[index])
		}
		return result;
	}

const take5 = take(5)

console.log(take5([1, 2, 3, 4, 5, 6, 7]))
console.log(take5([1, 2, 3, 4, 5, 6, 7]))

console.log(take(-1)([1, 2, 3, 4, 5]))
