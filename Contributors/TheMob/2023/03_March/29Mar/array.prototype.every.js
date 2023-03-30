// E.g. `every([1, 2, 3], (val) => val < 4)` should return `true`. `every([1, 2, 3], (val) => val < 3)` should return `false`.

// loop through the given array, determine if each element meets the condition
// if one element doesn't meet condition, return false
// otherwise, return true

const implementEvery = (arr, condition) => {
    let i = 0;
    while (i < arr.length && condition(arr[i]) === true) {
        i += 1
    }
	return i === arr.length
}

console.log(implementEvery([1, 2, 3], (val) => val < 4))
eonsole.log(implementEvery([1, 2, 13], (val) => val < 4))
