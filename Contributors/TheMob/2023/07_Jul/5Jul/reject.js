/*

The `reject` function is the inverse of `filter`.

It accepts a predicate function (function that returns true or false given an input)

and a list and returns a new list of the items that *do not* satisfy the predicate.

For example, given the predicate function `(x) => x < 4` and the list `[2, 3, 4, 5, 6]`, `reject` should return `[4, 5, 6]` (2 and 3 were rejected since they're less than 4).
(x) => x.length > 2
(word) => word !== 'kittens'

const lessThan4 = (x) => x < 4
reject(lessThan4, [2, 3, 4, 5, 6]) // returns [4, 5, 6]

use a loop that goes through all elements, if satisfies condition, don't include in output array
use filter, do the opposite of what the callback (predicate) function returns

increment through index


*/

function reject(fn, input){
    const result =[]
    for (let i = 0; i < input.length; i++){
        if (fn(input[i]) === false) {
			result.push(input[i]);
		} 
	   }
	return result;
}

const lessThan4 = (x) => x < null
const greaterThan4 = (x) => x > 4
const isKitten = (x) => x === 'kitten'

console.log(reject(lessThan4, [2, undefined, 4, 5, undefined])) // returns [4, 5, 6]
//console.log(reject(greaterThan4, [2, 3, 4, 5, 6])) // returns [4, 5, 6]
