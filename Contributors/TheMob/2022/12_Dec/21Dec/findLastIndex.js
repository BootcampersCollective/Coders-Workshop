/*
const array1 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

const isLargerNumber = (element) => element > 145;

console.log(findLastIndex(array1, isLargeNumber));

* iterate through array
	* run testing function on each element
	* store result, if true, could be the lastIndex
	* reassign 'true' item as we go
* return if defined, otherwise return -1
* could start at end and return first item that satisfies provided function (predicate function)
*/

function findLastIndex(array, fn) {
	for (let i = array.length - 1; i >= 0; i--) {
		if(fn(array[i])) {
			return i;
		}
	}
	return -1;
}

const array1 = [5, 55, 12, 50, 130, 44];
const isLargeNumber = (element) => element > 45;

const isSmallNumber = (element) => element < 20;

const isLessThan0 = (element) => element < 0;

console.log(findLastIndex([], )); // -1
