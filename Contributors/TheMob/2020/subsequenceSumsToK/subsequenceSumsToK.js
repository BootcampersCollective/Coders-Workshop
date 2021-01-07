const assert = require('assert');

const subsequentStrings = (arr, num) => {
 
    let startIndex = 0
    let runningTotal = 0
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count++;
            startIndex++;
            continue;
        }
        runningTotal += arr[i];

        if (runningTotal >= num) {
            if (runningTotal === num) {
                count++;
            }
            runningTotal -= arr[startIndex];
            startIndex++;
            
        }
    }
    if (runningTotal === num) {
        count++;
    }

    return count;
};

assert.deepStrictEqual(subsequentStrings([1, 2], 3), 1)
assert.deepStrictEqual(subsequentStrings([1, 2, 3], 3), 2);
assert.deepStrictEqual(subsequentStrings([1, 3, 3], 3), 2);
assert.deepStrictEqual(subsequentStrings([1, 2, 3], 5), 1);
assert.deepStrictEqual(subsequentStrings([1, 2, 3], 8), 0);
assert.deepStrictEqual(subsequentStrings([2, 2, 2], 2), 3);
assert.deepStrictEqual(subsequentStrings([], 8), 0);
console.log("All tests passed!")
/*
2, 1, 2, 3, 1, 4, 1, 2
2
1 3
2 5
3  8 - 2 = 6 (add one to total)
 - 1 = 5
1 6 (add one)
 - 2 = 4
... and so on

starting index
running total (accum)
count <- end result


*/