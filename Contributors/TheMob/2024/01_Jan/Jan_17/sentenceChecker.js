/*
* The sentence must start with a capital letter, followed by a lowercase letter or a space.
* All other characters must be lowercase letters, separators (`,`,`;`,`:`) or terminal marks (`.`,`?`,`!`).
* There must be a single space between each word.
* The sentence must end with a terminal mark immediately following a word.

"I am hungry." -> valid
"i am hungry." -> invalid
"PEople are often friendly." -> invalid

charAt(0) -> first character
charAt(0).toUppercase() === charAt(0) method
AND charAt(1).toLowercase() === charAt(1)

*/

const startsWithCapital = (sentence) => {
	if (sentence.charAt(0).toUpperCase() === sentence.charAt(0) && sentence.charAt(1).toLowerCase() === sentence.charAt(1)) {
		return true;
	}
}

const lastIsTerminal = (sentence) => {
	const last = sentence[sentence.length - 1]
	if (last === '.' || last === '?' || last === '!') {
		return true;
	}
}

function sentenceChecker(sentence) {
	if (startsWithCapital(sentence) && lastIsTerminal(sentence)) {
		return true;
	}
}

console.log(lastIsTerminal("I am hungry."))
