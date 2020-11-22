// # Shortest Standardized Path

// Given an absolute pathname that may have . or .. as part of it, return the shortest standardized path.

// For example, given `/usr/bin/../bin/./scripts/../`, return `/usr/bin/`.

// /usr/bin/../bin/./scripts/../
// ./ can be safely removed
// /usr/bin/../bin/scripts/../

// use `/` as a delimiter, split into an array
// get rid of all the `.`
// `..` cancels out the previous item
// '', 'usr', 'bin', '..', 'bin', '.', 'scripts', '..', ''

const assert = require("assert")

const shortestPath = path => {
  const arr = path.split("/")
  const len = arr.length
  let i = 0
  const result = []
  while (i < len) {
    if (arr[i] === ".") {
      i++
    } else if (arr[i] === "..") {
      result.pop()
      i++
    } else {
      result.push(arr[i])
      i++
    }
  }
  return result.join("/")
}

assert.strictEqual(shortestPath("/usr/bin/../bin/./scripts/../"), "/usr/bin/")
assert.strictEqual(shortestPath("/etc/././././"), "/etc/")
assert.strictEqual(shortestPath("/etc/././././../etc/"), "/etc/")

console.log("All tests passed!")
