// Write a function that takes a string and returns true if all characters in the string are unique. 
// Otherwise, it returns false. This function should complete in one pass through the string, i.e. it should run in O(n) time.

// For example, the input 'whistle' should return true, while 'painting' should return false.

const assert = require('assert');

const allUniqueChars = string => {
    if (typeof string !== 'string'){
        return "";
    }
    let arr = string.split('')
    let unique = [...new Set(arr)]
    if (arr.length===unique.length) {
        return true;
    } else {
        return false;
    }

};

assert.deepStrictEqual(allUniqueChars('whistle'), true);
assert.deepStrictEqual(allUniqueChars('painting'), false);
assert.deepStrictEqual(allUniqueChars({}), '');

console.log("All tests passed!");