/*

find highest scoring word

getLetterScore(letter)
	if (letter === 'a') {
		return 1;
	}
	if (letter === 'b') {
		return 2;
	}
}

`hello world` return `world`  
given `a man a plan a canal panama` return `panama`
given `aa b` return `aa` since `aa` and `b` score the same but `aa` comes earlier in the string.

1. use (character code - 96) to get position in alphabet (same as score) for a character
2. add all scores for characters in a word to get score for the word
3. set up max variable to figure out which word is highest scoring
*/

// get score function

function getWordScore(word) {
    let sum = 0;
    for(let i = 0; i < word.length; i++){
		sum += word.charCodeAt(i) - 96;
    }
    return sum;
}

function highestScoringWord(wordsArr) {
	// get score for each word
	// ['hello', 'world']

	let maxSoFarScore = 0;
	let maxSoFarWord = '';

	for (let i = 0; i < wordsArr.length; i++) {
		const wordScore = getWordScore(wordsArr[i]);
		if (wordScore > maxSoFarScore) {
			maxSoFarScore = wordScore;
			maxSoFarWord = wordsArr[i];
		}
	}
	return maxSoFarWord;
}

console.log(highestScoringWord(['aa', 'b']))
