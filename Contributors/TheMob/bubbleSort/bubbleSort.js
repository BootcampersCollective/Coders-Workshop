const assert = require('assert');

// look at every element, compare to next element
    // if next element is smaller than current, swap
    // otherwise, do nothing
// continue above until array is sorted

const bubbleSort = arr => {

    const arrLen = arr.length;

    for (let j = 0; j < arrLen; j++) {
        for (let i = 0; i < arrLen - 1; i++) {
            if (arr[i + 1] < arr[i]) {
              let k = arr[i];
              arr[i] = arr[i + 1];
              arr[i + 1] = k;
            }
        }
    }
    return arr;
};

/*
let k = arr[i];
arr[j] = arr[i];
arr[i] = k;
*/

assert.deepStrictEqual(bubbleSort([5 ,2 ,4]), [2, 4, 5]);
assert.deepStrictEqual(bubbleSort([1]), [1]);
assert.deepStrictEqual(bubbleSort([5, 2, 4, 8, 1]), [1, 2, 4, 5, 8]);
assert.deepStrictEqual(bubbleSort([3, 0, -1]), [-1, 0, 3]);
console.log("All tests passed!")