
// For example, if you are given `['map', 'pam', 'apple', 'kitten', 'word']` return `['pam', 'apple', 'kitten', 'word']`.

/*
iterate through array
	compare first letter of word, see if it's in any of the next words
	includes
	sort words, if === then they are anagrams
check length of every word in array, could help us eliminate non-anagrams
if find an anagram:
	return everything before and everything after current word

*/


function removeAnagram(arr) {
	// sort every item in arr with map function
	const sortedWords = arr.map((word) => word.split('').sort().join(''))

	for (let i = 0; i < sortedWords.length; i++) {
		for(let j = i + 1; j < sortedWords.length; j++){
			if (sortedWords[i] === sortedWords[j]){
				const arrBeforeFirstAnagram = arr.slice(0, i);
				const arrAfterFirstAnagram = arr.slice(i + 1);
				const combined = [...arrBeforeFirstAnagram, ...arrAfterFirstAnagram];
				return combined;
			}
		}
	}
}


function removeAnagram(arr) {
	// sort every item in arr with map function
	const sortedWords = arr.map((word) => word.split('').sort().join(''))

    const seen = {};
	for (let i = 0; i < sortedWords.length; i++) {
        const word = sortedWords[i];
        console.log(seen, word)
        if (seen[word] === undefined) {
            seen[word] = i;
        } else {
            const idx = seen[word];
            arr.splice(idx, 1);
            return arr;
        }

	}
}
console.log(removeAnagram(['map','apple', 'kitten', 'word', 'pam']));
