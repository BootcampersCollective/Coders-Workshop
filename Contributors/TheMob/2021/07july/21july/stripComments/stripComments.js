const assert = require('assert')

function stripComment(line) {
  const arr = line.split('')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '/' && arr[i + 1] === '/') {
      return arr.slice(0, i).join('')
    }
  }
  return line
}

function stripComments(str) {
  const lines = str.split('\n')
  return lines
    .map((line) => {
      return stripComment(line)
    })
    .join('\n')
}

assert.strictEqual(stripComments("const a = 1 // don't delete this"), 'const a = 1 ')
const origStr = `const apples = 10 // TODO: change that to pears
// could break
if (apples > 15) return`
const expectStr = `const apples = 10 

if (apples > 15) return`
assert.strictEqual(stripComments(origStr), expectStr)
console.log('All tests passed!')
