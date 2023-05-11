/*
For example, given the list `[1, 2, 3, 4, 5]` and the reducer function `(a, b) => a + b`, and the predicate function `(a, b) => b < 5`
[].reduce((acc, curr) => {})

`reduceWhile(predicate, reducer, list)` should return `10` (since 1 + 2 + 3 + 4 = 10). Note that 5 is not included in iteration since it does not pass the predicate `< 5`)
If the predicate function returns false, it "short-circuits" the iteration and returns the current value of the accumulator.
	while loop
*/

function reduceWhile(reducer, predicate, list, initial) {

  let accumulator = initial;
  let index = 0

  // for loop -- want to iterate
  while(index < list.length && predicate(accumulator, list[index])){
  
      // conditional (whether we want to call  function)* 
      // call function (a, b) => {}
      accumulator = reducer(accumulator, list[index]) 
      index++;
      // returns new item -- create something to put stuff in, accumulator
  }
  
  return accumulator;
}

const add = (acc, curr) => acc + curr
const lessThan5 = (acc, curr) => curr < 5

console.log(reduceWhile(add, lessThan5, [1, 2, 3, 4, 5], 0))

