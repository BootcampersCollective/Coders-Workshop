const cryptogram = (s, d) => {
  let resultsarr = [];
  let max = 0;
  let longestword = "";

  d.forEach(word => {
    let spointer = 0;
    let wordpointer = 0;

    while (wordpointer < word.length) {
      if (word[wordpointer] === s[spointer]) {
        wordpointer++;
        spointer++;
      } else {
        spointer++;
      }
      // letter is not contained in s, move to next word
      if (spointer === s.length) {
        break;
      }
      // each letter of word is contained in s
      else if (wordpointer === word.length - 1) {
        if (word.length > max) {
          max = word.length;
          longestword = word;
        }
      }
    }
  });
  return longestword;
};

console.log(cryptogram("abpplee", ["able", "ale", "apple", "bale", "kangaroo"])); // 'apple'
