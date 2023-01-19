// The standard JavaScript method [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) iterates over an array and executes
// a callback function for each item, passing the item into the function. For example, given the callback function `(item) => console.log(item)`, and the array 
// `[1, 2, 3, 4, 5]`, we'd expect `forEach` called on this array to produce five separate console logs:

// ```
// 1
// 2
// 3
// 4
// 5
// ```

// Implement `forEach` that iterates over objects instead of arrays. The callback function should take three arguments: `key`, `value`, `object`, corresponding to the key, value and object itself,
// respectively, for the object passed.

// For example, for the object `const o = {a: 1, b: 2}`, and the callback function `const cb = (key, value, object) => console.log(`${key} is ${value} in ${object}`)`, we'd expect

// `forEachObj(cb, o)`

// To produce 2 console logs:

// ```
// a is 1 in {a: 1, b: 2}
// b is 2 in {a: 1, b: 2}
// ```
// const arr = [1, 2, 3]
// arr.forEach((item) => console.log(item));

// loop (iteration)
// function takes in array to loop over and the function we want to perform on each item in the array

// map transforms the array you put into it; forEach just performs a function on each item

function func(item){ console.log(item)}

function funcObj(key, val, obj) { console.log(`${key} is ${val} in ${JSON.stringify(obj)}`)};

function forEach(arr, func) {
	for (let i = 0; i < arr.length; i++){
        func(arr[i])
    }
}


function forEachObj(obj, func) {
	for (key in obj) {
		func(key, obj[key], obj)
    }
}

forEach([1, 2, 3, 4, 5], func)
forEachObj({ a: 1, b: 2 })
