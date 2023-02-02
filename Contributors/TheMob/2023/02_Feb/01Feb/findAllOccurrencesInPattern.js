// Given a string and a pattern, find the starting indices of all occurrences of the pattern in the string.
// For example, given the string `"abracadabra"` and the pattern `"abr"`, you should return `[0, 7]`.

// create an empty array to contain the indicies
// create while loop with indexOf (returns first index of search term)
// (while indexOf returns something, we continue)
// slice off remaining part of string, keep track of where we're slicing


// abr acadabra
// result: [0]

function findPattern(stringToEvaluate, pattern){
  const result = []

  if (typeof stringToEvaluate === 'number') {
	stringToEvaluate = String(stringToEvaluate)
  }

  if (typeof pattern === 'number') {
	pattern = String(pattern)
  }

  if (pattern === '') {
	return result;
  }

  let sliceIndex = 0;
  let keepGoing = true;
  while (keepGoing) {
    let index = stringToEvaluate.indexOf(pattern)
	if (index === -1) {
		break;
	}
	result.push(index + sliceIndex);
	stringToEvaluate = stringToEvaluate.slice(index + pattern.length)
	sliceIndex += index + pattern.length
  }
  return result;
}

console.log(findPattern('abracadabrajabr', 'abr'))
console.log(findPattern('', 'abr'))
console.log(findPattern('lotsofstuff', ''))
console.log(findPattern(123123, 3))
console.log(findPattern(() => 'hello', function() {return '3'}))
