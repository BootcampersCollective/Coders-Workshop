// Array.prototype.reduce(), Array.prototype.map(), Array.prototype.forEach(), Array.prototype.filter(), Array.prototype.find()
const assert = require('assert');

const filter = (array, fn) => {
    for(let i=0; i<array.length; i++){
        fn(array[i])
    }
}


// Test Cases
const testArr = [];

const testFn = num => {
  if (num > 0) {
    testArr.push(num)
  }
};

let arr1 = [-1,2,3];

assert.deepStrictEqual(testArr, [])
filter(arr1, testFn);
console.log(testArr)
assert.deepStrictEqual(testArr, [2, 3])
console.log("All tests passed!")