//  Write a function that takes two strings, s1 & s2. Have it return the longest common shared subsequence.

// "ABADC", "BABAD"  => "ABAD"
// "AGGTAB", "GTABHSF" => "GTAB"
// "aaaa", "aa" => "aa"
//  "", "...",  => ""
// "ABBA", "ABCABBA" => "ABBA"


const assert = require('assert');
// .split() to create array from string
// placeholder other stuff
// .join() to take resulting array and convert to string

const longestSharedSubsq = (s1, s2) => {
    const s1Arr = s1.split('');
    const s2Arr = s2.split('');

    // ['A', 'B', 'A', 'D', C']
    // ['B', 'A', 'A', 'B', 'A', D']

    // iterate through first array
    // see if current element is in second array
        // if: is second letter in second array the next letter?

    let subStrArr = []
    let nextIndex = 0
    for (let i = 0; i < s1Arr.length; i++) {
        const index = s2Arr.indexOf(s1Arr[i], nextIndex);
        
        if (index !== -1) {
            nextIndex = index + 1
            // while loop
            const newSubStrArr = []
            let j = i;
            let keepGoing = true;
            let counter = 1;
            while (keepGoing) {
                newSubStrArr.push(s1Arr[j + counter - 1]);
                if (s1Arr[j + counter] === s2Arr[index + counter]) {
                    counter++;
                } else {
                    keepGoing = false;
                }
            }
            if (newSubStrArr.length > subStrArr.length) {
                subStrArr = newSubStrArr;
            }
        }
    }
    return subStrArr.join('');

    // ['B', 'A', 'B', 'A', D']
};


assert.deepEqual(longestSharedSubsq("ABADC", "BABAD"), "ABAD");
assert.deepEqual(longestSharedSubsq("ABADC", "BAABAD"), "ABAD");
console.log('All tests passed!')

