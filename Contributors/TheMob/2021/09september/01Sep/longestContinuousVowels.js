
/*
Given an array of strings, sort the array in descending order based on the number of continuous vowels in each string.

For example, given `['Or is it the taco that makes the chili spicy', 'Closer the neighbor, further the anger', 'The anxious queen will surrender']`

Your function should return `['The anxious queen will surrender', 'Closer the neighbor, further the anger', 'Or is it the taco that makes the chili spicy']`

Since the first sentence in the returned array has at most 3 consecutive vowels (both `iou` and `uee`), the second has two (`ei`), and the third has at most one consecutive vowel.
*/

// loop through each element in the array
// loop through each letter in the string
// keep track of which of the elements has the longest consecutive vowels
// sort based on which string have the most consecutive vowels

function continuousVowelCount(str) {
	let maxCount = 0
	let currentCount = 0
	const vowels = 'aeiou'

	str.split('').forEach((char) => {
		if (vowels.includes(char)) {
			currentCount += 1;
		} else {
			if (currentCount > maxCount) {
				maxCount = currentCount;
			}
			currentCount = 0;
		}
	})
	return maxCount;
}
function sortLongestContinuousVowels(arr) {
	// create helper function to count how many continuous vowels each element has
	return arr.sort((a,b) => continuousVowelCount(b) - continuousVowelCount(a))
}

console.log(sortLongestContinuousVowels(['Closer the neighbor, further the anger','Or is it the taco that makes the chili spicy', 'The anxious queen will surrender']))
