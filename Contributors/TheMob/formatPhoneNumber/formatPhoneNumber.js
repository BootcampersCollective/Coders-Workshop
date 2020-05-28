// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.

const assert = require('assert');

// For example, with input [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] your function should return "(123) 456-7890"

// target index values [0, 1, 2] [3, 4, 5] and [6, 7, 8, 9]
// contain the first group within brackets ()
// add a space between first group and second group
// add - dash between second group and thrid group

const formatPhoneNumber = array => {
    if (!array || array.length !== 10 || array[0] === 0) {
        return ""
    }
  const areaCode = `(${array.slice(0, 3).join('')})`;
  const prefixCode = ` ${array.slice(3, 6).join('')}`;
  const localCode = `-${array.slice(6, 10).join('')}`;

  return areaCode + prefixCode + localCode;
};

assert.deepStrictEqual(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), '(123) 456-7890');
assert.deepStrictEqual(formatPhoneNumber([3, 2, 3, 4, 6, 6, 7, 8, 9, 9]), '(323) 466-7899');
assert.deepStrictEqual(formatPhoneNumber([3, 2, 3, 4, 6, 6, 7, 8, 9]), ''); // Length is too short.
assert.deepStrictEqual(formatPhoneNumber([3, 2, 3, 4, 6, 6, 7, 8, 9, 0, 1]), ''); // Length is too long.
assert.deepStrictEqual(formatPhoneNumber([0, 2, 3, 4, 6, 6, 7, 8, 9, 0]), ''); // No leading zeros.
assert.deepStrictEqual(formatPhoneNumber(null), '');
assert.deepStrictEqual(formatPhoneNumber(undefined), '');
assert.deepStrictEqual(formatPhoneNumber(), '');
assert.deepStrictEqual(formatPhoneNumber([]), '');
console.log('All tests passing!');