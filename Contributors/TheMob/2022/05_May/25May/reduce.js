// # Array.Prototype.reduce
// Implement the method `Array.Prototype.reduce()` according to the [MDN spec](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). The method can be run independently of the array upon which it is acting.
// E.g. `reduce([1, 2, 3], (accum, curr ) => curr + accum, 0)` should return `6`.

// The reduce() method executes a user-supplied "reducer" callback function on each element of the array,
// in order, passing in the return value from the calculation on the preceding element. 

// if initial value, use as initial value of accumulator
// otherwise, use the first value of the array

// move through all the elements - while loop
// at each element, call reducer function and passing accumulator and current value to it,
// accumulator becomes output of reducer function

function reduce(arr, func, initial=null) {
	let acc;
    let i = 0;
    if (!initial) {
        acc = arr[0];
        i++;
    } else {
        acc = initial;
    }
    while (i < arr.length) {
        acc = func(acc, arr[i]);
        i++;
    }
    return acc;
}

// note: when we redeclare using a function declaration, it reassigns the function!
function reduce(arr, func, initial=null) {
	let acc;
    let i = 0;
    if (!initial) {
        acc = arr[0];
        i++;
    } else {
        acc = initial;
    }
    while (i < arr.length) {
        acc = func(acc, arr[i]);
        i++;
    }
    console.log('Hello Kitty.')
    return acc;
}

console.log(reduce([1,2,3], (a, b)=>a+b, 10))
console.log(reduce([1,2,3], (a, b)=>a+b))
console.log(reduce([[1],[2,3]], (a, b)=>a.concat(b), ['a']))
console.log(reduce([[1],[2,3]], (a, b)=> [...a, ...b], ['a']))
console.log(reduce(['r', 'e', 'd', 'u', 'c', 'e'], (a, b)=> a + b, 're'))

