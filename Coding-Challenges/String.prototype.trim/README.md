# String.prototype.trim

Reimplement the `trim()` method.

`trim()` removes whitespace from both ends of a string and returns a new string, without modifying the original string.

`trim` should take a single argument, the string to trim.

For example

`trim('   hi     ')` should return `'hi'`
`trim('there   ')` should return `'there'`
`trim('hi  there')` should return `'hi  there'` (no change since there was no whitespace at either end)

Bonus: Handle objects and arrays, recursively trimming any strings within.
