// Given an integer n and a list of integers l, write a function that randomly generates a number from 0 to n-1 that isn't in l (uniform).

// we can use Math.random()

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// integerArray: [2, 3, 4]
// target: 5
function getRandomNotInL(targetInteger, integerArray) {
	// if getrandomInt result is in integer array, run 

	const integerSet = new Set(integerArray);
	let val = getRandomInt(targetInteger);
	while (integerSet.has(val)) {
		val = getRandomInt(targetInteger);
	}
	return val;
}

console.log(getRandomNotInL(5, [2, 3]))
console.log(getRandomNotInL(15, [2, 3, 6, 12]))
