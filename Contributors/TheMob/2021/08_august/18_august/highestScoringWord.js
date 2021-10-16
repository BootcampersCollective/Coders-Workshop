// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.
// helpful to create an array with all letters, their value would correspond to their index + 1


// For example, given
// `hello world` return `world`  
// given `a man a plan a canal panama` return `panama`
// given `aa b` return `aa` since `aa` and `b` score the same but `a` comes earlier in the string.


// ASCII value of character? Numerical representation of the letter.
// character value can be interpreted different ways
	// a = 97 in ASCII; a = 1 in our challenge

// split up the string by words
// take each word, forEach character in word, get the value, add to some kind of total, find the highest scoring word
	// total for each word
// make object of key: word value: score
// {
// 	panama: 12,
// 	canal: 8,
// 	plan: 4,
// }

function calculateWordScore(word) {
	let wordTotal = 0
	word.split('').forEach((char) => {
		let charValue = char.charCodeAt(0) - 96
		if (charValue < 1 || charValue > 26) return
		wordTotal += charValue
	})
	return wordTotal
}


function highestScoringWord(sentence) {
  const wordValueObj = {}
  const words = sentence.split(' ');
  words.forEach((word) => {
    const newWordScore = calculateWordScore(word) // 14
    wordValueObj[word] = newWordScore
      
  });
  const entries = Object.entries(wordValueObj)

  let highestWord = ''
  let highestNumber = 0
  for (let i = 0; i < entries.length; i+=1) {
    if (entries[i][1] > highestNumber) {
        highestWord = entries[i][0]
        highestNumber = entries[i][1]
    }
  }
  return highestWord
}


console.log(highestScoringWord('a man a plan a canal panama')) // panama
console.log(highestScoringWord('aa b')) // aa
console.log(highestScoringWord('hello world')) // world
console.log(highestScoringWord('hello^^ world!')) // world



