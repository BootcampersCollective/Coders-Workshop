const assert = require('assert')

const factorial = n => {
    let num = n
    while(num > 1) {
        n = n * (num - 1)
        num--
    }
    return n
}



const factorialRecursive= (n) => {
    // memoize: saving the result of the executed function in an object/some data structure
    if (n < 1) {
        return 1
    }
    return n * factorialRecursive(n - 1)
}

const memo = {}
const factorialRecursiveMemo= (n) => {
    // memoize: saving the result of the executed function in an object/some data structure
    if (n < 1) {
        return 1
    }
    if (!memo[n]) {
        memo[n] = factorialRecursive(n - 1)
    }
    return n * memo[n]
}

// check out https://www.freecodecamp.org/news/understanding-memoize-in-javascript-51d07d19430e/

assert.deepStrictEqual(factorial(5), 120)
assert.deepStrictEqual(factorialRecursive(5), 120)
assert.deepStrictEqual(factorialRecursiveMemo(5), 120)

console.log('All test passed!')
