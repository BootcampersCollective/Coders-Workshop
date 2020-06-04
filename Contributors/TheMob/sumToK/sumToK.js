// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// write function that takes the array and an integer

// Bonus: Can you do this in one pass?


const assert = require('assert');

const array = [10, 15, 3, 7];
const k = 17;

function compare(array, k) {
    if (array.length < 2) {
        return false;
    };
    
    // iterate over the array (for loop)
    for (let i = 0; i < array.length; i++) {
        for (let j= i + 1; j < array.length; j++) {
            // compare each element to each other element to see if they sum to k
            if (array[i] + array[j] == k) {
                return true;
            }
        }
    };
    return false;
};

assert.deepEqual(compare([10, 15, 3, 7], 17), true);
assert.deepEqual(compare([10, 15, 3, 9], 17), false);
assert.deepEqual(compare([], 0), false);
assert.deepEqual(compare([],17), false);
console.log('All tests passed!');
