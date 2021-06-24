const assert = require("assert")
/*
16  -->  1 + 6 = 7
942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

// turn to string
// use split
// convert it back into a number
// add it back up

const digitalRoot = (num) => {
  let retNumber = 0
  while(num > 0){
    retNumber += num % 10
    num = Math.floor(num/10)
    if(num === 0 && retNumber > 9){
      num = retNumber
      retNumber = 0
    }
  }
  return retNumber
}

assert.strictEqual(digitalRoot(16), 7)
assert.strictEqual(digitalRoot(132189), 6)
assert.strictEqual(digitalRoot(132189), 6)
assert.strictEqual(digitalRoot(493193), 2)
console.log("All tests passed!")
