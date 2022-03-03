// Given a string and a pattern, find the starting indices of all occurrences of the pattern in the string.

// For example, given the string `"abracadabra"` and the pattern `"abr"`, you should return `[0, 7]`.

// for loop, in every iteration, break the large array into pieces as large as the substring

const findOccurrencesOfPattern = (bigStr, smallStr) => {
    const smallLength = smallStr.length;
    const bigLength = bigStr.length;
    const countArr = [];
    for(let i = 0; i <= bigLength - smallLength; i++){
        const tempStr = bigStr.slice(i, i + smallLength);
        if (smallStr === tempStr) countArr.push(i);
    }
    return countArr;
}

console.log(findOccurrencesOfPattern("abracadabra", "abra"))
// hilary's version
const findOccur = function(s, pattern) {
	const solution = [];
	const n = pattern.length;
	let patPointer = 0;
	let potentialStart = 0;
	for (let sIdx = 0; sIdx < s.length; sIdx++) {
	  if (patPointer === n) {
		solution.push(potentialStart);
		patPointer = 0
	  }
	  if (s[sIdx] === pattern[patPointer]) {
		if (patPointer === 0) {
		  potentialStart = sIdx;
		}
		patPointer++;
	  } else if (s[sIdx] === pattern[0]) {
		potentialStart = sIdx;
		pIdx = 1;
	  } else {
		patPointer = 0;
	  }
	}
	if (patPointer === n) solution.push(potentialStart);
	return solution;
  }
