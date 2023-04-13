
// `compact([0, 1, false, 2, "", 3])` should return `[1, 2, 3]`.
// filter
// 

const compact = (arr) => arr.filter((item) => item)

console.log(compact([0, 1, false, 2, "", 3])) // should get [1, 2, 3]
