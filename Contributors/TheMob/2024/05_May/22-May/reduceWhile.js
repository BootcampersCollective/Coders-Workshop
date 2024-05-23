const assert = require('assert');
/*
reduce: [1, 2, 3, 4, 5] (a, b) => a + b ==> 15
For example, given the list `[1, 2, 3, 4, 5]` and the reducer function `(a, b) => a + b`, and the predicate function `(a, b) => b < 5`

iterating through input array
reduceWhile - checking to make sure predicate function is still true
if predicate true: at each step, perform the reduction
if false or at the end: return accumlated value
*/


function reduceWhile(list, reduceFunc, predicateFunc, initialVal){
    let accumulator = initialVal
    for(let val of list){
        if(!predicateFunc(accumulator, val)){
           return accumulator 
        }

        accumulator = reduceFunc(accumulator, val)
        
    }
    return accumulator
}

assert.deepStrictEqual(reduceWhile([1, 2, 3, 4, 5], (a, b) => a + b, (a, b) => b < 5 , 0), 10)
assert.deepStrictEqual(reduceWhile([], (a, b) => a + b, (a, b) => b < 5 , 0), 0)
console.log('👍')
