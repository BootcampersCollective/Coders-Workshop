//  Given a string of words separated by spaces, return a map from each word in the string to the count of that word. 
// For example, given the following string:
// "give a little get a little", return
/* {
  "give": 1,
  "a": 2,
  "little": 2,
  "get": 1
} */

const assert = require('assert');

// convert string to array of words ['give', 'a', 'little']
// use a js object
// create keys for each word
// is key in object ? increment value : create key with value of 1
// increment the values for each key 
// 

const countWords = string => {
    if (!string) return '';
    const arr = string.split(' ');
    
    const counts = {};

    arr.forEach(word => {
        if (counts[word]) {
            counts[word] = counts[word] + 1;
        } else {
          counts[word] = 1;
        };
    });
    return counts;
}

console.log(countWords("give a little get a little"));



assert.deepEqual(countWords("give a little get a little"), {
    "give": 1,
    "a": 2,
    "little": 2,
    "get": 1
})
assert.deepEqual(countWords(""), '');
assert.deepEqual(countWords(undefined), '');
assert.deepEqual(countWords(null), '');
assert.deepEqual(countWords(), '');
console.log("All tests passed!");