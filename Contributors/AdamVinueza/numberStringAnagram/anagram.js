/**
 * Transforms an anagram of a sequence of number words to a corresponding
 * sequence of numerals. For example:
 *
 *     erhte => 3
 *     owtsxi => 26
 *     revoveoffizeine => 5501
 *
 * Because the input string is an anagram of a sequence of number words, the
 * order of the numerals returned does not matter.
 *
 * This algorithm is not the most efficient. Its time complexity is O(nm), where
 * n is the length of the input string and m is the number of number words in
 * the string. Here is one simple way to speed it up: instead of repeatedly
 * splicing the anagram string to remove the number word, we could replace
 * letters in the number word with a letter not found in any numeral (such as
 * 'k'), and just skip over occurrences of that letter when searching the
 * string. In this way, the result of removing 'zero' from 'revoveoffizeine'
 * would be 'kkvkveoffikeine', and the result of removing 'five' from that
 * string would be 'kkkkvkokfkkeine'.
 */

const assert = require('assert');

// A mapping of number words to numerals.
const numberMap = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9'
};

// These letters occur only once in the numerals.
const first = {
  z: 'zero',
  w: 'two',
  u: 'four',
  x: 'six',
  g: 'eight'
};

// These letters occur only once in the numerals not included above.
const second = {
  o: 'one',
  h: 'three',
  f: 'five',
  s: 'seven'
};

// These letters occur only once in the numerals not included above.
const third = {
  i: 'nine'
};

// Remove a letter from a string.
const cut = (str, c) => {
  const idx = str.indexOf(c);
  return str.slice(0, idx) + str.slice(idx + 1);
};

// Remove a number word from a string.
const removeNumberWord = (str, numberWord) => {
  for (let c of numberWord) {
    str = cut(str, c);
  }
  return str;
};

// Returns the result of removing an occurrence of a number word from the
// anagram, along with the number word removed. If none of the number words in
// the map are in the anagram, the original anagram and null are returned.
const splitNumberWord = (anagram, wordMap) => {
  let result = anagram;
  let numberWord = null;
  for (let c of anagram) {
    if (c in wordMap) {
      numberWord = wordMap[c];
      result = removeNumberWord(anagram, numberWord);
      break;
    }
  }
  return [result, numberWord];
};

// Read the anagram in from the command line.
let anagram = process.argv[2];

const anagramLength = anagram.length;

// The algorithm works as follows. Try to find number words from the first map
// in the anagram, and keep removing those words from the anagram until none are
// left. Repeat the process with the second and third maps.
//
// Number words found are added to an array as they are found.
const numberWordsFound = [];
for (let map of [ first, second, third ]) {
  let result = '';
  let num = null;
  while (anagram !== result) {
    [result, num] = splitNumberWord(anagram, map);
    if (num !== null) {
      numberWordsFound.push(num);
      anagram = result;
      result = '';
    }
  }
}

// This is a quick sanity check. If the input is OK and the program is correct,
// the result of joining the number words found in the string should be an
// anagram of the input string, so they should at least have the same length.
assert.equal(anagramLength, numberWordsFound.join('').length);

// Print the result to the console.
/* eslint-disable no-console */
console.log(numberWordsFound.map(x => numberMap[x]).join(''));
