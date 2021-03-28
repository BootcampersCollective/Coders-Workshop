
const assert = require('assert')

function findAllOccurrences(str, pattern) {
    const intervals = []
    str.split('').forEach((char, i) => {
        if (char === pattern[0]) {
            let k = i + 1
            let j = 1
            let occurrence = false
            while (j < pattern.length) {
                if (pattern[j] === str[k]) {
                    if (j === pattern.length - 1) {
                        occurrence = true
                        break
                    }
                    k += 1
                    j += 1
                } else break
            }
            if (occurrence) {
                intervals.push(i)
            }
        }
    })
    return intervals
}


assert.deepStrictEqual(findAllOccurrences("abracadabra", "abr"), [0, 7])
assert.deepStrictEqual(findAllOccurrences("Mississippi", "iss"), [1, 4])
console.log('👍')