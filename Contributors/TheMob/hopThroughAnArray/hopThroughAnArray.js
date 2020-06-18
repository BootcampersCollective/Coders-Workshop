// Given an array where each number represents the number of hops you can make, 
// determine whether you can reach to the last index starting at index 0.

//  For example, [2, 0, 1, 0] returns True while [1, 1, 0, 1] returns False.

const assert = require('assert')

// iterate through array
// can we add hops to i?

const hop = array => {

    for(let i=0; i<array.length;){
        const arrFinalIndex = array.length-1;
        if(array[i]===0 && i<arrFinalIndex){
            return false;
        } else if (i+array[i] > arrFinalIndex){
            return false;
        } else if (i+array[i] === arrFinalIndex){
            return true;
        } else {
            i+=array[i];
        };
        
    };
};

const array = [2, 0, 1, 0];
assert.deepStrictEqual(hop(array), true);
assert.deepStrictEqual(hop([1, 1, 0, 1]), false);
console.log("All tests passed!");



