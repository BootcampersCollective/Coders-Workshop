const assert = require('assert')

const capAWord = word => {
  let charCode = word.charCodeAt(0);
  const restOfWord = word.slice(1);
  charCode -= 32;
  const capital = String.fromCharCode(charCode);
  return capital + restOfWord;
};
const capitalize = string => {
  const lowerWords = ["the", "and", "of", "for"];
  const strArray = string.split(" ");
  const returnArray = [];
  strArray.forEach((word, i) => {
    if (i === 0) {
      returnArray.push(capAWord(word));
    } else if (!lowerWords.includes(word)) {
      const capWord = capAWord(word);
      returnArray.push(capWord);
    } else {
      returnArray.push(word);
    }
  });
  return returnArray;
};

assert(capitalize("the old man and the sea"), "")
