const getLength = require('./getlLength');

console.log(getLength([""])); // 1
console.log(getLength(["", ""])); // 2

console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2

console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0

console.log(getLength([,,,,])); // -> 4
console.log(getLength([null])); // -> 1

console.log(getLength([null, null]))  // -> 2
console.log(getLength([NaN])) // -> 1

console.log(getLength([NaN, NaN, NaN])) // -> 3
console.log(getLength([undefined])); // -> 1
console.log(getLength([undefined, undefined, void(0)])); // -> 3