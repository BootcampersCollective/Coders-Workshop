# Strip Comments 


Complete the solution so that it strips all text that follows any of a set
of comment markers passed in (`//` or `#`, for instance).  
Any whitespace at the end of the line should also be stripped out.

Given an input string of:
```js
const apples = 10 // TODO: change that to pears
// could break
if (apples > 15) return
```

The expected output would be:
```js
const apples = 10
if (apples > 15) return
```

---

Additionally, how would one differentiate between a real comment
and a comment marker within a string?

Given an input string of:
```js
console.log('//!hey')
console.log('hello') // test
```

The expected output would be:
```js
console.log('//!hey')
console.log('hello')
```

Based on <https://www.codewars.com/kata/51c8e37cee245da6b40000bd>
