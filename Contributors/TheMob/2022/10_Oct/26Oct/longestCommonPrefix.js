//For example, input `["flower","flow","flight"]` should return `"fl"` since "fl" is the longest common prefix among all the strings.
// Input `["dog","racecar","car"]` should return `""` since there are no common prefixes among the strings.

// iterating through and making a set of the first elements of each string
// if the size is 1, slice and return to the index

const longestCommonPrefix = (strs) => {
	let i = 0;
    //while the first string in array has length and the Set of all input strings at current index has size of 1
    while(i < strs[0].length && new Set(strs.map(s => s[i])).size === 1) {
        i++;
    }
    return strs[0].slice(0, i);
}

const longestCommonPrefix2 = (strs) => {
	for (let i = 0; i < strs[0].length; i++) {
		if (new Set(strs.map(s => s[i])).size !== 1) {
			return strs[0].slice(0, i);
		}
	}
	return "";
}

const testArr1 = ["flower","flow","flowight"]
const testArr2 = ["dog","racecar","car"]
const testArr3 = ['catalog','dog','cat','dee','do'] 
// console.log(longestCommonPrefix(testArr1))
console.log("result", longestCommonPrefix2(testArr1))
//console.log("result3", longestCommonPrefix(testArr3))
