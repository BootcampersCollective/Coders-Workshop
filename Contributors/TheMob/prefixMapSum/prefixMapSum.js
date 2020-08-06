// Implement a PrefixMapSum class with the following methods:

// insert(key, value): Set a given key's value in the map. If the key already exists, overwrite the value.
// sum(prefix: str): Return the sum of all values of keys that begin with a given prefix. 

// For example, you should be able to run the following code:


const assert = require('assert')

class PrefixMapSum {

    constructor() {
        this.prefixMap = {}
    }

    insert(key, value) {
        this.prefixMap[key] = value
    }

    sum(prefix) {
        const results = Object.keys(this.prefixMap)
            .filter(word => word.startsWith(prefix))
        return results.reduce((accum, curr) => {
            return accum + this.prefixMap[curr]
        }, 0)
    }
}

// insert("columnar", 3)
// sum("col") => 3

// insert("column", 2)
// sum("col") => 5

const map = new PrefixMapSum()
map.insert("columnar", 3)
assert.deepStrictEqual(map.sum("col"), 3)

map.insert("column", 2)
assert.deepStrictEqual(map.sum("col"), 5)

console.log('All tests passed!')

