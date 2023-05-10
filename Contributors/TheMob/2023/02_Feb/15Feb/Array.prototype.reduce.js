// reduce:
// [1, 2, 3, 4, 5]
// accumulator, currentValue => adds accumulator and current value; returns sum
// walks through the array one by one; currentValue is any given item
// have to set initial value
/*
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
*/
// arguments: array, operation (function), initial value
function reduce(arr, operation, initialValue) {
  arr.forEach(el => {
    initialValue = operation(initialValue, el)
  })
  return initialValue
}

const reduceRecursive = (arr, operation, initialValue) => (arr.length == 0)
	 ? initialValue
  : reduceRecursive(arr.slice(1), operation, operation(initialValue, arr[0]))

const add = (a, b) => a + b
const sum = (a, b) => a - b

console.log(reduceRecursive([1, 2, 3, 4], add, 0)) // => 10
console.log(reduce([1, 2, 3, 4], add, 0)) // => 10
// console.log(reduce(["hi,there","nice"], sum, 0)); // => 0
// console.log(reduce([5,"nice", 42], sum, 0)); // => 0
