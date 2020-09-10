// You have `n` fair coins and you flip them all at the same time. Any that come up tails you set aside. 

// The ones that come up heads you flip again. How many rounds do you expect to play before only one coin remains?

// Write a function that, given `n` coins, returns the number of rounds you'd expect to play until one coin remains. 

// As an example, given `n = 412` coins, you should return `9`.

// each time we flip the coins, reduce them by half


const assert = require('assert')

const coinFlip = n => {
    if (n === 0) {
        return 0
    }
    return recurse(n)
}

const recurse = (num, flips = 0) => {
    num = num / 2
    // base case n === 1 exit function
    flips++
    if (num <= 1) {
        return flips
    }
    return recurse(num, flips)
}
assert.deepStrictEqual(coinFlip(412), 9)
assert.deepStrictEqual(coinFlip(12), 4)
assert.deepStrictEqual(coinFlip(0), 0)
console.log("All tests passed!")

