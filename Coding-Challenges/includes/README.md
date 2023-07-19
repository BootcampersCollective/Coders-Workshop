# Includes

Implement the ECMAScript version of [String.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes).

Specifically, this function should accept variables for the string to search, the search string to be searched for,
and an optional position argument that indicates the position in the search string to begin searching. It should return
a boolean indicating whether the target string includes the string to be searched for.


The search should be case-sensitive.

For example

```js
includes('Four score and seven years ago', 'score') // => returns true since 'score' is in the original string
includes('Four score and seven years ago', 'four') // => returns false since the search should be case-sensitive
includes('Four score and seven years ago', 'Four', 2) // => returns false since the position argument indicates the search should begin at index 2

```

Follow-up: How could you rewrite this function to also have the functionality of [Array.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)?
