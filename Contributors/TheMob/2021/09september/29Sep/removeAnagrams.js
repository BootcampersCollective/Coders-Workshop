//You are given an array of strings. Two of the strings will be anagrams of each other. 
// Remove the first anagram and return the array of the rest of strings.

//For example, if you are given `['map', 'apm', 'apple', 'kitten', 'word']` return `['apm', 'apple', 'kitten', 'word']`.

// another example ['listen', 'kittens', 'silent', 'mongolia'] return ['listen', 'kittens', 'mongolia']



const isAnagram = (str1, str2) => str1.length === str2.length
	? str1.split('').sort().join() === str2.split('').sort().join()
	: false

// ['listen', 'kittens', 'silent', 'mongolia']
const removeAnagrams = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
    if (isAnagram(arr[i], arr[j])) {
		const arrCopy = arr.slice()
        return (console.log(arrCopy), false, arrCopy.splice(i, 1), arrCopy)
        }
}

    // const filteredList = arr.slice(i).filter((elem) => !isAnagram(arr[i], elem))
    // if(filteredList.length !== arr.slice(i)) return 
  }
}

console.log(removeAnagrams(['map', 'apm', 'apple', 'kitten', 'word']))
console.log(removeAnagrams(['listen', 'kittens', 'silent', 'mongolia']))






console.assert(isAnagram("pam", "apm"), "Failed")
