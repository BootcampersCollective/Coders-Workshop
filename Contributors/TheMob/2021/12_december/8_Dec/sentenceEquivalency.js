function areSynonyms(word1, word2, synonyms) {
	const flatSynonyms = synonyms.flat();
	if (!flatSynonyms.includes(word1)) {
		return false;
	}
	return synonyms.some((pair) => {
		return (pair.includes(word1) && pair.includes(word2))
	})
}

function sentenceEquivalency(sentence1, sentence2, synonyms) {
	if (typeof sentence1 !== 'string' || typeof sentence2 !== 'string') throw new Error("sentences must both be strings")
	if (!Array.isArray(synonyms)) throw new Error("synonyms must be an array")

	if (sentence1 === sentence2) return true;
	const sentence1Arr = sentence1.split(" ")
	const sentence2Arr = sentence2.split(" ")
	if (sentence1Arr.length !== sentence2Arr.length) return false;

	return sentence1Arr.every((currValue, index) => {
		if (currValue === sentence2Arr[index]) return true;
		return areSynonyms(currValue, sentence2Arr[index], synonyms);
	})
}

console.log(sentenceEquivalency('He wants to eat food', 'He wants to consume food', [['big', 'large'], ['eat', 'consume']])) // true
console.log(sentenceEquivalency('He wants to eat the food', 'He wants to eat food', [['big', 'large'], ['eat', 'consume']])) // false
console.log(sentenceEquivalency('He wants to eat food', 'He wants to consume food', [])) // false
