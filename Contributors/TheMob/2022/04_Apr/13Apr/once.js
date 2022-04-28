// Create a function that takes another function, e.g. `myFunc`,
// as an argument and will return a new function that has the same behavior as `myFunc` but can only be called once.

// For example, if the function is named `once`, then `once(myFunc)`
// should return a copy of the function `myFunc` that can be called once, but subsequent calls will be ignored.

const curriedMakeOneFunction = (func, n = 1) => {
	let count = 0;

	return function(...args) {
		count++;
		if (count <= n) {
			// call func with args
			return func(...args);
		}
		return () => (x,y) => add(x,y);
	}
}


const add = (x, y) => x + y;

const addOnce = makeOnceFunction(add, 2);

console.log(addOnce(2, 3))
console.log(addOnce(4, 5))
console.log(addOnce(4, 5)(5, 5)(3, 3))
console.log(addOnce(4, 5))
console.log(addOnce(4, 5))
console.log(addOnce(4, 5))
