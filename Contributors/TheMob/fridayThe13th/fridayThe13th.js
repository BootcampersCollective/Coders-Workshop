// Write a function to calculate how many unlucky days are in the given year.
// For example, given `2015`, your function should return `3`; for `1986`, return `1`; and for `2132`, return `1`.

// loop through a year
// check the 13th of every month to see if it's a Friday

const assert = require("assert")

const countFridays = (y) => {
    if (isNaN(y)) return 0
    let unluckyFridays = 0
    for (let i = 0; i < 12; i++) {
        const date = new Date(`${i + 1}/13/${y}`)
        if (date.getDay() === 5) {
            unluckyFridays += 1
        }
    }
    return unluckyFridays
}

// `2015`, your function should return `3`
console.log(countFridays(2015))

assert.deepStrictEqual(countFridays(2015), 3)
assert.deepStrictEqual(countFridays(1986), 1)
assert.deepStrictEqual(countFridays(2132), 1)
assert.deepStrictEqual(countFridays('hello'), 0)

console.log("All test passed")