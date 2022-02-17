// For example, given `['Or is it the taco that makes the chili spicy', 'Closer the neighbor, further the anger', 'The anxious queen will surrender']`

// Your function should return `['The anxious queen will surrender', 'Closer the neighbor, further the anger', 'Or is it the taco that makes the chili spicy']`

// one function should take a string and return the largest number of consecutive vowels
// create a dictionary keying strings to conseq vowels

// go through string letter by letter, up vowel count by 1 if vowel, otherwise reset to 0, keep track of max when upping vowel count, return max

function maxContinuousVowels (string) {
    const vowelSet = new Set('AEIOUaeiou');
    let maxCount = 0;
    let currCount = 0;
	for (let c of string) {
		if (vowelSet.has(c)) {
            currCount++;
            maxCount = Math.max(maxCount, currCount);
        } else {
            currCount = 0;
        }
	}
    return maxCount;
}

function longestContinuousVowels (arr) {
	return arr.sort((a, b) => maxContinuousVowels(b) - maxContinuousVowels(a))
}

console.log(longestContinuousVowels(['The anxious queen will surrender', 'Closer the neighbor, further the anger', 'Or is it the taco that makes the chili spicy']))
