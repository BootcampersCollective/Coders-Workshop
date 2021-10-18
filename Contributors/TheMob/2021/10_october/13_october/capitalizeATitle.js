
// Write a function that takes a string and properly capitalizes it as if it were the title of a work of art.  
// The first word should begin with an uppercase, and each subsequent word should begin with an uppercase except the words `the`, `and`, `of`, and `for`.
// For example, an input `"war and peace"` should return `"War and Peace"` and `"the old man and the sea"` should return `"The Old Man and the Sea"`.

const excludedWords = ['the', 'and', 'of', 'for']

function capitalize(str) {
	const lowerString = str.toLowerCase()
	return lowerString[0].toUpperCase() + lowerString.slice(1)
}

function capitalizeATitle(str) {
	const strArr = str.split(' ')
	for (let i = 0; i < strArr.length; i++) {
		if (i === 0) {
			strArr[i] = capitalize(strArr[i])
		} else {
			// every other word, capitalize first letter if NOT in excluded list
			if (!excludedWords.includes(strArr[i])) {
				strArr[i] = capitalize(strArr[i])
			}
		}
	}
	return strArr.join(' ')
}

console.assert(capitalizeATitle('the old man and the sea') === 'The Old Man and the Sea')
console.log('👍')

