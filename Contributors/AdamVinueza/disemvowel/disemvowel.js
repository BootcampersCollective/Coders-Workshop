#!/usr/bin/env node

const vowels = new Set([ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
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

const disemvowel = src => {
  return removeOccurrences(src, vowels);
}

const test = [ 'quick', 'banana', undefined, '', 'aeiouaeiouAEIOU' ];
const expecteds = [ 'qck', 'bnn', undefined, '', '' ]

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
