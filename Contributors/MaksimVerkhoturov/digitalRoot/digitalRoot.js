// # Digital Root
//
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

const assert = require("assert")

const digitalRoot = (num) => {
  while (String(num).length > 1) {
    num = String(num)
      .split("")
      .reduce((acc, x) => acc + Number(x), 0)
  }
  return num
}

assert.strictEqual(digitalRoot(16), 7)
assert.strictEqual(digitalRoot(942), 6)
assert.strictEqual(digitalRoot(132189), 6)
assert.strictEqual(digitalRoot(493193), 2)

console.log("All tests passed!")
