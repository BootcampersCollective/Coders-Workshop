
// Given a list of words, return the shortest unique prefix of each word. For example, given the list:

// `['dog', 'cat', 'apple', 'apricot', 'fish']`

// Return the list: `['d', 'c', 'app', 'apr', 'f']`


const assert = require('assert')

const shortestUniquePrefix = arr => {

    return arr.map((word, index) => {
        let substring = ''
        const characterArr = word.split('')

        let filteredWords = []
        for (let i = 0; i < characterArr.length; i++) {
            // start building substrings of the word we're looking at
            substring += characterArr[i]
            filteredWords = arr.reduce((accum, curr, idx) => {
                if (idx !== index) {
                    if (curr.startsWith(substring)) {
                        // if another word starts with our current string, add to accumulator array
                        return accum.concat(curr)
                    } else {
                        // otherwise, do nothing
                        return accum
                    }
                } else {
                    // skip when comparing to self
                    return accum
                }
            }, [])
            if (filteredWords.length === 0) {
                // stop when no other words start with substring
                break
            }
        }
        return substring
    })
}

assert.deepStrictEqual(shortestUniquePrefix(['dog', 'cat', 'apple', 'apricot', 'fish']), ['d', 'c', 'app', 'apr', 'f'])
assert.deepStrictEqual(shortestUniquePrefix(['dog', 'dogbed', 'apple', 'apricot', 'fish']), [ 'dog', 'dogb', 'app', 'apr', 'f' ])
assert.deepStrictEqual(shortestUniquePrefix(['dog', '', 'apple', 'apricot', 'fish']), [ 'd', '', 'app', 'apr', 'f' ])
console.log("All tests passed!")
