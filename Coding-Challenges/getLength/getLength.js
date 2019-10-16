#!/usr/bin/env node

const getLength = () => {

};

console.log(getLength([1])); // 1
console.log(getLength([1, 2])); // 2
console.log(getLength([1, 2, 3, 4, 5])); // 5
console.log(getLength([])); // 0
console.log(getLength([undefined])); // 1
