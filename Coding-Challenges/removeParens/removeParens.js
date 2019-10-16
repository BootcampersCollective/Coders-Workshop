#!/usr/bin/env node

const removeParens = str => {

};

console.log(removeParens("()())()")); // 1
console.log(removeParens("()((()()")); // 2
console.log(removeParens(")(")); // 2
