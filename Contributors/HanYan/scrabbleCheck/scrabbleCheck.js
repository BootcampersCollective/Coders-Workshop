const scrabbleCheckReuse = (word, chars) => {
  for (let char of word) {
    if (!chars.includes(char)) return false;
  }
  return true;
}

const scrabbleCheckNoReuse = (word, chars) => {
  for (let char of word) {
    if (!chars.includes(char)) return false;
    else chars.splice(chars.indexOf(char), 1);
  }
  return true;
}

const scrabbleCheckWildcard = (word, chars) => {
  let numWildcards = chars.filter(char => char === "*").length;
  for (let char of word) {
    if (!chars.includes(char)) {
      if (numWildcards > 0) numWildcards--;
      else return false;
    }
    else chars.splice(chars.indexOf(char), 1);
  }
  return true;
}

module.exports = { scrabbleCheckReuse, scrabbleCheckNoReuse, scrabbleCheckWildcard };