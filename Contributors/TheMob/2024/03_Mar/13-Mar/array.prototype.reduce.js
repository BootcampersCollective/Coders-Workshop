/*
E.g. `reduce([1, 2, 3], (accum, curr) => curr + accum, initialVal )` should return `6`.
*/

//
function callbackFn(a, b){
    a += b
    return a
}

function callbackFn1(a, b){
	if (b < 4) {
		a.push(b);
	}
	return a;
}

function reduce(array, callbackFn, initial){
    for(let i = 0; i < array.length; i++){
        initial = callbackFn(initial, array[i])
    }
    return initial
}

console.log(reduce([1, 2, 3, 4, 5], callbackFn, 0))
console.log(reduce([1, 2, 3, 4, 5], callbackFn1, []))
