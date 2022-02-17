// Implement the method Array.Prototype.every() according to the MDN spec. The method can be run independently of the array upon which it is acting.

// E.g. every([1, 2, 3], (val) => val < 4) should return true. every([1, 2, 3], (val) => val < 3) should return false.

// for loop, if ever is false, return false; otherwise return true

function every (arr, fn) {
	for (const item of arr) {
        if (!fn(item)) {
            return false
        }
    }
    return true
}
console.log(every([1, 2, 3], (val) => val > 4))
console.log(every([], (val) => val > 4))
