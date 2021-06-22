// Write a function `rand7()` that returns an integer from 1 to 7 (inclusive) with uniform probability.

// Using `rand7()`, create `rand5()`, a function that returns an integer from 1 to 5 (inclusive)


// the Math.random() function returns a random # between 0 and .999...
// multiply by 7? and round up
// 


//Math.ceil(0.0000)?

const assert = require('assert')

const rand7 = () => {
    return Math.floor(Math.random() * 7) + 1
}

const rand5 = () => {
    return Math.floor(rand7() * 5 / 7) + 1
}

assert(rand5() < 6 && rand5() > 0);
console.log(rand7())
console.log(rand7())
console.log(rand7())
console.log(rand7())
console.log(rand7())
console.log(rand7())
console.log(rand7())
console.log(rand7())
console.log(rand7())
console.log('--------------');
console.log(rand5())
console.log(rand5())
console.log(rand5())
console.log(rand5())
console.log(rand5())
console.log(rand5())
console.log(rand5())
console.log(rand5())
console.log(rand5())