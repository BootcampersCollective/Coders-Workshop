// Write a program to determine the lexicographically smallest string that can be created after an unlimited number of rotations (moves).

// For example, suppose we are given the string `daily`. The best we can create in this case is `ailyd`.

const assert = require("assert");

function rotato(str) {
  let chars = str.split("");

  let push = chars.shift();
  chars.push(push);

  return chars.join('');

};

function rotations(str) {
    // create all possible rotations, return in an array of strings

    // iterating through the string and creating a rotation for each letter in the string
    str = str.toLowerCase();

    const returnArr = [];
    let rotated = str;

    for (let i = 0; i < str.length; i++) {
        rotated = rotato(rotated);
        returnArr.push(rotated);
    }
    returnArr.sort();
    return returnArr[0];
}


assert.equal(rotations('daily'), 'ailyd');
console.log('All tests passed!');