// Given a string of words delimited by spaces, reverse the words in string. For example, given `"hello world here"`, return `"here world hello"`.

// Follow-up (more challenging): given a mutable string representation, can you perform this operation in-place?


// (start at end, concatenate backwards)
// swap start and end (have temporary variable)
// increment start index, decrement end index

const assert = require('assert')

const reverseWordsInAString = str => {
    // split the string by space
    const strArr = str.split(' ')
    let start = 0
    let end = strArr.length - 1

    while(start < end) {
        let temp = strArr[start]
        strArr[start] = strArr[end]
        strArr[end] = temp
        start++
        end--
    }
    return strArr.join(' ')
}

const reverseWordsInAStringAgain = str => str.split(' ').reverse().join(' ')


assert.deepStrictEqual(reverseWordsInAStringAgain("hello world here"), "here world hello")
assert.deepStrictEqual(reverseWordsInAStringAgain("hello world!"), "world! hello")
assert.deepStrictEqual(reverseWordsInAStringAgain("hello"), "hello")
assert.deepStrictEqual(reverseWordsInAStringAgain(""), "")
console.log('All tests passed!')