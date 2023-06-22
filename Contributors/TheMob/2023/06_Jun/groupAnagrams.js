
/*
For example, input `['apple', 'race', 'god', 'care', 'dog']` could return `['race', 'care', 'dog', 'god', 'apple']`.

- has same length?
	- no? not anagram
	- yes? check if they have same letters

same collection of letters
sort strings and compare

areAnagrams(str1, str2)

*/

const areAnagrams = (str1, str2) => {
    return Array.from(str1).sort().join('') == Array.from(str2).sort().join('');
}

const groupAnagrams = (wordArray) => {
    return wordArray.sort((a, b) => areAnagrams(a, b))
}

console.log(areAnagrams('race', 'care'))

console.log(groupAnagrams(['apple', 'race', 'god', 'care', 'dog']))
