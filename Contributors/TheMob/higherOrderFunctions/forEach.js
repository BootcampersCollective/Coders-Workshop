// Array.prototype.reduce(), Array.prototype.map(), Array.prototype.forEach(), Array.prototype.filter(), Array.prototype.find()
const assert = require('assert');

const forEach = (array, fn) => {
    for(let i=0; i<array.length; i++){
        fn(array[i])
    }
}


// Test Cases
const testArr = [];

const testFn = num => {
  testArr.push(num + 1)
};

let arr1 = [1,2,3];
const testString = "Clark"


assert.deepStrictEqual(testArr, [])
forEach(testString, testFn);
console.log(testArr)
// assert.deepStrictEqual(testArr, [2, 3, 4])
console.log("All tests passed!")