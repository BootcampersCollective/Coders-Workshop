const assert = require('assert')

const inArray = (a1, a2) => a1.filter((i) => isSubstrInArr(i, a2)).sort()

function isSubstr(word1, word2) {
  if (word2.length === 0) return false
  return word2.startsWith(word1)
    ? true
    : (isSubstr(word1, word2.slice(1)))
}

function isSubstrInArr (word, arr) {
  if (!arr.length) return false
  return isSubstr(word, arr[0])
    ? true
    : isSubstrInArr(word, arr.slice(1))
}

assert.deepStrictEqual(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]), ["arp", "live", "strong"])
assert.deepStrictEqual(inArray(["tarp", "mice", "bull", "arms"], ["lively", "alive", "harp", "sharp", "armstrong"]), ["arms"])
console.log('All tests passed!')

