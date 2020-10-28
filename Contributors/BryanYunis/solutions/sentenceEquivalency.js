const assert = require("assert");

const sentenceEquivalency = (s1, s2, synonyms) => {
  const s1Arr = s1.split(" ");
  const s2Arr = s2.split(" ");
  if (s1Arr.length !== s2Arr.length) return false;

  const synonymMapper = (word) => {
    return synonyms.reduce((accum, synonymPair) => {
      if (word === synonymPair[0]) {
        return synonymPair[1];
      }
      if (word === synonymPair[1]) {
        return synonymPair[0];
      }
    }, false);
  };

  return s1Arr.every(
    (word, i) => word === s2Arr[i] || word === synonymMapper(s2Arr[i])
  );
};

assert.deepStrictEqual(
  sentenceEquivalency("He wants to eat food", "He wants to consume food", [
    ["big", "large"],
    ["eat", "consume"],
  ]), true
);
assert.deepStrictEqual(
  sentenceEquivalency("He wants to eat food", "He wants to consume food", [
    ["big", "large"],
  ]), false
);
assert.deepStrictEqual(
  sentenceEquivalency("He should eat a large dinner", "He should eat a big dinner", [
    ["big", "large"],
  ]), true
);

console.log("All tests passed.")