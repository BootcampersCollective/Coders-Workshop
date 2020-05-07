// Create a function that takes a string and returns the string with all vowels removed.

// 'coder' => ['c', 'o', 'd', 'e', 'r']
// ['c', 'o', 'd', 'e', 'r'] => ['c', 'd', 'r']
const assert = require("assert");

function disemvowel(str) {
  const strArr = str.split("");
  const returnArr = [];
  const vowels = ["a", "e", "i", "o", "u"];

  // /[^aeiou]/

  strArr.forEach((char) => {
    // if char is vowel, skip, otherwise push to returnArr
    if (!vowels.includes(char)) {
      returnArr.push(char);
    }
  });
  return returnArr.join("");
}

const disemvowelRegex = (str) => str.toLowerCase().replace(/[aeiou]/g, "");

assert.equal(disemvowelRegex("Djibouti"), "djbt");
console.log("All tests passed!");
