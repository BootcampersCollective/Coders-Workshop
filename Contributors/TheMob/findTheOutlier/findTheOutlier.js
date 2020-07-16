// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns this "outlier" N.

// For example, input `[2, 4, 0, 100, 4, 11, 2602, 36]` should return: `11` (the only odd number). 
// Input `[160, 3, 1719, 19, 11, 13, -21]` should return: `160` (the only even number).

// check first 3 indices of array to establish a pattern
// find
// go through every item, find one that satisfies what we're looking for

const assert = require('assert')

const determineOddOrEven = arr => {
    let odds = []
    let evens = []
    for (let i = 0; i < 3; i++) {
        if (arr[i] % 2 == 0) {
            evens.push(arr[i]);
        } else {
            odds.push(arr[i]);
        }
    }
    if (odds.length > evens.length) {
        return 1;
    }
    return 0;
}

const findOutlier = arr => {
    const remainder = determineOddOrEven(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== remainder) {
            return arr[i];
        }
    }
}

assert.deepStrictEqual(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]), 11);
assert.deepStrictEqual(findOutlier([3,5,9,11,13,20]), 20);
assert.deepStrictEqual(findOutlier([20, 5, 9, 11, 13, 111]), 20);
console.log('All tests passed!')

