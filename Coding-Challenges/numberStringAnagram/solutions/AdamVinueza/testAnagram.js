const mod = require('./anagram');
const assert = require('assert');

const tests = [
  {
    input: 'niesevehrtfeev',
    expected: 753
  },
  {
    input: 'trhswxtoeei',
    expected: 632
  },
  {
    input: 'oneoneoneoneone',
    expected: 11111
  },
  {
    input: 'ehftsoiurinxznergoei',
    expected: 98640
  }
];

for (let test of tests) {
  const result = mod.anagramToNumber(test.input);
  assert.equal(test.expected, result, `Expected ${test.expected}, found ${result}`);
}
console.log(`${tests.length} tests pass`);
