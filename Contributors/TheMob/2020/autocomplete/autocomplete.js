
// Implement an autocomplete system. That is, given a query string `s` and a set of all possible query strings, return all strings in the set that have `s` as a prefix.

// For example, given the query string `de` and the set of strings `[dog, deer, deal]`, return `[deer, deal]`.

// for loop; i < array.length
// check length of query string, check for equality
// create temp array to push things into
// iterate over array, see if items start with same characters as query string

const assert = require("assert")

const autocomplete = (s, array) => array.filter((word) => word.startsWith(s))

assert.deepStrictEqual(autocomplete("de", ["dog", "deer", "deal"]), ["deer", "deal"])
console.log("All tests passed!")