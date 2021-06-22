const assert = require("assert")

const digitalRoot = n => {
  const nums = (n + "").split("")
  const reducer = (a, c) => parseInt(a + parseInt(c))
  return nums.length < 2
    ? nums.reduce(reducer, 0)
    : digitalRoot(nums.reduce(reducer, 0))
}



assert.strictEqual(digitalRoot(16), 7)
assert.strictEqual(digitalRoot(942), 6)
assert.strictEqual(digitalRoot(132189), 6)
assert.strictEqual(digitalRoot(493193), 2)

console.log("All tests passed!")
