/*
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
*/

const includesFullString = (arr, str, i) => {
  const maxArrItemLength = Math.max(...arr.map((a) => a.length))

  for (let j = 0; j < maxArrItemLength; i++, j++) {
    if (!arr.some((arrItem) => {
      return arrItem[j] === str[i]
    })) {
      return false
    }
  }
  return true
}

const iterateOverLine = (commentMarkers) => (line) => {
  let insideString = false
  let i
  for (i = 0; i < line.length; i++) {
    if (line[i] === "'" || line === "\"") {
      insideString = !insideString
    } else if(includesFullString(commentMarkers, line, i) && !insideString) {
      break
    }
  }
  if (i < line.length) {
    return line.slice(0, i).trim()
  }
  return line
}

const stripComments = (str, commentMarkers) => {
  const lines = str.split("\n")

  const mapper = iterateOverLine(commentMarkers)
  return lines.map(mapper).join("\n")
}

const assert = require("assert")

assert.strictEqual(stripComments("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]), "apples, pears\ngrapes\nbananas")
assert.strictEqual(stripComments("console.log('//hey')\nconsole.log('hello') // test", ["//"]), "console.log('//hey')\nconsole.log('hello')")



