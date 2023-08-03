/*
For example
const array1 = [5, 12, 8, 130, 44];
const found = find((element) => element > 1000, array1);
*/

function find(fn, array) {
	// iterate through array, for loop
    for (let i = 0; i < array.length; i++){
        if(fn(array[i]) === true){
			return array[i]
		}
    }
}

const isGreaterThan5 = (item) => {
	if (item > 5) {
		return true
	} else {
		return false;
	}
}

const isGreaterThan7 = (item) => item > 7;

const isAlsoGreaterThan5 = (item) => item > 5;
const testArray = [1, 2, 4, 6, 8];
const testArray2 = [{name: 'fred', age: 238}, {name: 'sally', age: 57}];

console.log(find((item) => item.name === 'winston', testArray2))
