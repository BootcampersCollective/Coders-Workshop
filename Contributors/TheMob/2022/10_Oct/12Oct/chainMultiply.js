// chainMultiply(2)(3)(); // => 6
// chainMultiply(2)(3)(4)(5)(); // => 120
// chainMultiply(9)(8)(7)(); // 504
// chainMultiply(100)(2)(5)(10)(.01)(); // 100

// recursion: return a function that calls chainMultiply

function chainMultiply(parameter) {
	return (secondParameter) => {
		// secondParameter may or may not be defined
		if (!secondParameter) {
			return parameter
		}
		return chainMultiply(parameter * secondParameter)
	}
}

console.log(chainMultiply(2)(3)()); // => 6

console.log(chainMultiply(100)(2)(5)(10)(.01)()); // 100
