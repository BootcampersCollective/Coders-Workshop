// Write a function to determine whether a number is prime.

// For example, input `1709` should return `true`. Input `8` should return false.

const assert = require("assert")

function isPrime (input) {
    const checkFor = Math.ceil(input / 2)
    for (let i = 2; i < checkFor; i++) {
        if (!(input % i)) return false
    }
    return true
}

assert.strictEqual(isPrime(8), false)
assert.strictEqual(isPrime(7), true)
assert.strictEqual(isPrime(1709), true)
console.log("All tests passed!")