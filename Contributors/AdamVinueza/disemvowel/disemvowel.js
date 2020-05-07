#!/usr/bin/env node

// A set of vowels (case-sensitive). We use a set because Set.has is much faster
// than Array.indexOf.
const vowels = new Set([ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

// Remove all occurrences of any member of set from src.
const removeOccurrences = (src, set) => {
  if (!src) {
    return src;
  }
  let dest = []
  for (const c of src) {
    if (!set.has(c)) {
      dest.push(c);
    }
  }
  return dest.join('');
};

// Disemvowel removes all occurrences of vowels from src.
const disemvowel = src => {
  return removeOccurrences(src, vowels);
}

// Test strings, aligned with the expected values.
const test = [ 'quick', 'banana', undefined, '', 'aeiouaeiouAEIOU' ];
const expecteds = [ 'qck', 'bnn', undefined, '', '' ]

// Run the tests.
let passed = true;
for (let i = 0; i < test.length; i++) {
  actual = disemvowel(test[i]);
  if (actual != expecteds[i]) {
    console.log(`FAIL: expected ${expecteds[i]}, found ${actual}`);
    passed = false;
    break;
  }
}
if (passed) {
  console.log('PASS');
}
