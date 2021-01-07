// Write a function that takes a string and properly capitalizes it as if it were the title of a work of art.

// For example, an input "war and peace" should return "War and Peace" 
// and "the old man and the sea" should return "The Old Man and the Sea".

const assert = require('assert');


const capitalizeTitle = (titleString) => {
    const titleSplit = titleString.split(' ');

    const uncapitalSet = new Set()

    uncapitalSet
        .add('and')
        .add('or')
        .add('the')
        .add('of')

    const titleizedArray = titleSplit.map((word, idx) => {
      if (uncapitalSet.has(word) && idx != 0) {
        return word;
      } else {
        const asciiIndex = word.charCodeAt(0) - 32;
        return String.fromCharCode(asciiIndex) + word.slice(1,);
      };
    });

    return titleizedArray.join(" ");
};

assert.deepEqual(capitalizeTitle("war and peace"), "War and Peace");
assert.deepEqual(capitalizeTitle("the old man and the sea"), "The Old Man and the Sea");
assert.deepEqual(capitalizeTitle("it"), "It");
console.log("All tests passing!");


