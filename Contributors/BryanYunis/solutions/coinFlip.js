const assert = require("assert");

//recursion
const recursive = (n, count = 0) => {
  if (n <= 1) {
    return count;
  }
  return recursive(n / 2, count + 1);
};

recursive(2); //?

// no recrusion
const coinsNoRecursion = n => {
  let count = 0;

  while (n > 1) {
    n /= 2;
    count++;
  }
  return count;
};

// mathy
const coinsMath = n => {
  return Math.ceil(Math.log(n) / Math.log(2));
};

assert.equal(recursive(412), 9);
assert.equal(coinsNoRecursion(412), 9);
assert.equal(coinsMath(412), 9);
