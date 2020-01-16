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


const anagramToNumber = anagram => {

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

  numbers = numberWordsFound.map(x => numberMap[x])
  numbers.sort().reverse();
  return parseInt(numbers.join(''));
}

module.exports = {
  anagramToNumber
};
