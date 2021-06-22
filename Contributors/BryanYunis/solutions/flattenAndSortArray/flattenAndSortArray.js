const assert = require("assert")


const flattenAndSort = (arr) => arr.reduce((a, c) => a.concat(c), []).sort((a, b) => a - b)

assert.deepStrictEqual(flattenAndSort([[1, 2, 3], [5, 4], [], [8, 7, 9, 6]]), [1, 2, 3, 4, 5, 6, 7, 8, 9])

console.log("All tests passed!")
