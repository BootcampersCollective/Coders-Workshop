
const assert = require('assert')
// function to grab what's in between parens

const extract = string => {
    let parenCount = 0
    let start
    if (!string.includes('(')) return string
    return string.split('').reduce((accum, char, i) => {
        if (char === '(') {
            parenCount++
            if (!start) {
                start = i + 1
            }
        }
        if (char === ')') {
            parenCount--
        }
        if (parenCount === 0 && start)  {
            return string.slice(start, i)
        }
    }, '')
}


const expand = string => {
    if (extract(string) === string) {
        return string
    }
    if (!isNaN(string[0])) {
        return expand(extract(string)).repeat(Number(string[0]))
    }
    return string[0] + expand(extract(string))
}

assert.deepStrictEqual(expand("2(a3(b))"),"abbbabbb");
assert.deepStrictEqual(expand("k(a3(b(a2(c))))"),"kabaccbaccbacc");
