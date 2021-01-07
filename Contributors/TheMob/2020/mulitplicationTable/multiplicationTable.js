// Given integers N and X, write a function that returns the number of times X appears as a value 
// in an N by N multiplication table.

// For example, given N = 6 and X = 12, you should return 4

const assert = require('assert');

const multiplicationTable = (n, x) => {

    const factorPairs = findAllFactors(x)
    let counter = 0

    factorPairs.forEach(factorPair => {
        
        if(factorPair[0] <= n && factorPair[1] <= n) {
            if (factorPair[0] === factorPair[1]) {
                counter++;
            } else {
                counter += 2;
            }
        };
    })
    return counter;
}

const findAllFactors = (x) => {
    let result = [];
    for (let i = 1; i*i <= x; i++) {
        if (x % i === 0) result.push([i, x/i]);
    }
    return result;
};

assert.deepStrictEqual(multiplicationTable(6, 12), 4)
assert.deepStrictEqual(multiplicationTable(1, 1), 1)
assert.deepStrictEqual(multiplicationTable(1, 3), 0)
console.log('All tests passed')