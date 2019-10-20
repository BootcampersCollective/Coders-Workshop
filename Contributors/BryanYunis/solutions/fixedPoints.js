const assert = require("assert");

function fixedPoints(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > i) {
            return false;
        }
        if (arr[i] === i) {
            return arr[i];
        }
    }
    return false;
}


const value = fixedPoints([1, 5, 7, 8])
assert.equal(value, false)

const value2 = fixedPoints([-6, 0, 2, 40])
assert.equal(value2, 2)

const valueType = typeof value
assert.equal(valueType, "boolean")

const value2Type = typeof value2
assert.equal(value2Type, "number")

console.log("All tests passed.")

