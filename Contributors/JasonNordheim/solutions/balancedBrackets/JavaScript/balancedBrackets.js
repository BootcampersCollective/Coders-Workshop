// # Balanced Brackets
// # Balanced Parentheses

// Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

// For example, given the string `([])[]({})`, you should return true.

// Given the string `([)]` or `((()`, you should return false.

const assert = require("assert");

const balancedBrackets = (str) => {
  const stack = []; // array to use a stack
  let result = true; // default to passing
  str.split("").forEach((char) => {
    // add only the closing character to the stack
    switch (char) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        // if the stack has a closing parenthesis,
        // see if that found parenthesis matches the closing
        const last = stack.slice(-1);
        if (last && last[0] !== char) return (result = false);
        else stack.pop();
        break;
    }
  });
  return result && stack.length === 0;
};

assert.strictEqual(balancedBrackets("()()"), true); // true
assert.strictEqual(balancedBrackets("())"), false); // false
assert.strictEqual(balancedBrackets("(())))"), false); // false
assert.strictEqual(balancedBrackets("((()))"), true); // true

console.log("All tests passed!");
