// Write a function to reverse every other word in a string. For reference, the first word should not be reversed, the second should be.
// For example, given `reverse this string now`, your function should return `reverse siht string won`. 
// Given `Drink more coffee, if you would`, return `Drink erom coffee, fi you dluow`.
// You may consider punctuation part of the word. So given `Hi there, you don't have a nametag`, return `Hi ,ereht you t'nod have a nametag`

// 'reverse this string now'

// split into an array of each word => ['reverse', 'this', 'string', 'now']
// reverse odd indicies
	// reverse: swap first/last (JS might be a little easier)
// join the array back into a string
// "string" -> swap first and last -> "gtrins" -> swap second and second to last -> "gnrits"

function reverse(str) {
	const strArr = str.split('')
	for (let i = 0, j = strArr.length - 1; i < j; i++, j--) {
		// swap str[i] for str[j]
		let tmp = strArr[i]
		strArr[i] = strArr[j]
		strArr[j] = tmp
	}
	return strArr.join('')
}

function reverseEveryOtherWord(inputString) {
	const inputStrArr = inputString.split(" ");
	if (inputStrArr.length <= 1) {
		return inputStrArr
	}
	for (let i = 0; i < inputStrArr.length; i++) {
		if (i % 2 !== 0) {
			inputStrArr[i] = reverse(inputStrArr[i])
		}
	}
	return inputStrArr.join(' ')
}

console.assert(reverseEveryOtherWord("Hi there, you don't have a nametag") === "Hi ,ereht you t'nod have a nametag")
console.log("👍")
