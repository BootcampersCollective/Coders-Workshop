// Get the length of an array using recursion without accessing its length property.


const assert = require('assert');
function getLength(arr, count = 0) {
    // base case is array is empty
    if (!arr[0]) {
        return count;
    }
    count++;
    arr.pop();
    return getLength(arr, count); // => 5
};

assert.equal(getLength([1, 2, 3, 4, 5]), 5);
console.log("All tests passed!")


