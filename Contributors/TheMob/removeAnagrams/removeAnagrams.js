// Remove this anagram and return the array of strings without one of the anagrams.
// For example, if you are given `['map', 'pam', 'apple', 'kitten', 'word']` return `['map', 'apple', 'kitten', 'word']`.

// are two words anagrams? -- make separate function

// split array
// use nested for-loop
// anagram: multiple words with same letters arranged differently: e.g. 'map' and 'pam'
// keep track of anagrams in input array, remove last anagram from all sets of anagrams

const assert = require('assert')

const sortString = str => {
    return str.toLowerCase().split('').sort().join('')
}

const removeAnagrams = arr => {
    const words = {}
    let sortedString = ''
    for (let i = 0; i < arr.length; i++) {
        sortedString = sortString(arr[i])
        // does object already have an anagram of this word in it
        if (!words[sortedString]) {
            words[sortedString] = [arr[i]]
        } else {
            words[sortedString].push(arr[i])
        }
    }
    // if object (dict) has more than item in the array, remove last item

    for (const property of Object.keys(words)) {
        const wordsArray = words[property]
        if (wordsArray.length > 1) {
            // there is an anagram!
            const itemToRemove = wordsArray[wordsArray.length - 1] // e.g. 'pam'
            arrCopy.splice(arrCopy.lastIndexOf(itemToRemove), 1)
        }
    }
    return arrCopy
}
assert.deepStrictEqual(removeAnagrams(['map', 'pam', 'apple', 'kitten', 'word']), ['map', 'apple', 'kitten', 'word'])
assert.deepStrictEqual(removeAnagrams(['map', 'pam', 'amp', 'ant', 'tan']), ['map', 'pam', 'ant'])
assert.deepStrictEqual(removeAnagrams(['map', 'amp', 'pam', 'apple', 'kitten', 'word']), ['map', 'amp', 'apple', 'kitten', 'word'])
assert.deepStrictEqual(removeAnagrams(['map', 'amp', 'pam', 'apple', 'kitten', 'word', 'tan', 'ant']), ['map', 'amp', 'apple', 'kitten', 'word', 'tan'])

console.log('All tests passed!')