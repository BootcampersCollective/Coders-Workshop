// The find() method returns the value of the first element 
// in the provided array that satisfies the provided testing function.


const assert = require('assert')
const find = (arr, fn) => {
    if (!Array.isArray(arr) || typeof fn !== 'function') {
        return undefined;
    }
    for(let i = 0; i < arr.length; i++){
        if (fn(arr[i])) {
            return arr[i];
        };
    }
    return undefined;
};

const array = [5, 12, 8, 130, 44];
const array2 = [1, 2, 3]
const testFn = (val) => {
    return val > 10
};
const testFn2 = (val) => {
    return val < 10
};
assert.deepStrictEqual(find(array, testFn), 12)
assert.deepStrictEqual(find(array, testFn2), 5)
assert.deepStrictEqual(find(array2, testFn), undefined)
console.log('All tests passed!')
