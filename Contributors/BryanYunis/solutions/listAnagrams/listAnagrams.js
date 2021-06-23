const assert = require("assert")

const anagrams = (word, arr) => arr.filter((item) => item.split("").sort().toString() === word.split("").sort().toString())

assert.deepStrictEqual(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]), ["aabb", "bbaa"])

assert.deepStrictEqual(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]), ["carer", "racer"])

assert.deepStrictEqual(anagrams("laser", ["lazing", "lazy", "lacer"]), [])
console.log("All tests passed!")
