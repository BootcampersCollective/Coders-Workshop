const assert = require('assert')

function shortestSubstr(string, chars) {
    const windowLength = chars.length
    let i = 0
    let j = windowLength - 1 
    let shortestSubstrSoFar = '' 
    let charsCopy = [...chars]
    while (i < string.length - windowLength) {
        const window = string.slice(i, j + 1) 
        window.split('').forEach((char) => {
            if(charsCopy.includes(char)) {
                charsCopy.splice(charsCopy.indexOf(char), 1)
            }
            if (charsCopy.length === 0) {
                charsCopy = [...chars]
                if (window.length < shortestSubstrSoFar.length || shortestSubstrSoFar === '') {
                    shortestSubstrSoFar = window
                }
            }
        })
        if (j === string.length) {
            i += 1
            j = i + windowLength
        }
        j += 1
    }
    return shortestSubstrSoFar || null
}

assert.strictEqual(shortestSubstr('egaliehg', ['a', 'l', 'e']), 'egal') 
assert.strictEqual(shortestSubstr('figehaeci', ['a', 'e', 'i']), 'aeci') 
assert.strictEqual(shortestSubstr('figehaeci', ['a', 'x', 'i']), null) 

console.log('👍')
