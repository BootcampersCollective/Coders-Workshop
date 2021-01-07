// # Balanced Parentheses

// Given a string of open and closing parentheses, return whether the parentheses are balanced (well-formed).

// For example, given the string `(())()(())`, you should return true.

// Given the string `())` or `((()`, you should return false.

// take each parent
// put in an array
// as we find same bracket, pop the original one

const assert = require("assert")

const balancedParentheses = str => {
  const seen = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      seen.push(str[i])
    } else {
      if (!seen.length) {
        return false
      }
      seen.pop()
    }
  }
  return true
}

assert.strictEqual(balancedParentheses("()()"), true)
assert.strictEqual(balancedParentheses("())"), false)
assert.strictEqual(balancedParentheses("(())))"), false)
assert.strictEqual(balancedParentheses("((()))"), true)

console.log("All tests passed!")
