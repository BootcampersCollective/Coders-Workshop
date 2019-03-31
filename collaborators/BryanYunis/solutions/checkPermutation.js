// Solution 1. Sort the strings. If two strings are permutations, then we know they have the same characters but in different orders. 
// Therefore, sorting the strings will put the characters from two permutations in the same order and we can compare them.

function checkPermutation(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    const strArr1 = str1.split("")
    const strArr2 = str2.split("")
    const sorted1 = strArr1.sort().join("")
    const sorted2 = strArr2.sort().join("")

    return sorted1 === sorted2

}

// Solution 2. The above solution is acceptable and clean, but not very efficient. If efficiency is paramount, we can solve another way using the definition of a permutation -- two words with the same character counts.
// We can map each character to its frequency using an array somewhat like a hash table. We increment the table values on the first string,
// then decrement on the second. As an optimization boost, we can decrement early if the value ever becomes negative (it will never return to 0);
// if we don't terminate early, the array must be all zeros since we incremented the same number of times that we decremented.

function checkPermutationEfficient(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    const letters = new Array(128).fill(0) // assuming ASCII characters, which can be mapped from 0-128
    for (let i = 0; i < str1.length; i++) {
        letters[str1.charCodeAt(i)]++
    }
    for (let i = 0; i < str1.length; i++) { // note str1.length === str2.length at this point, so no need to recalculate str2.length
        letters[str2.charCodeAt(i)]--
        if (letters[str2.charCodeAt(i)] < 0) {
            return false
        }
    }
    return true // letters has no negative values, and therefore no positive values either
}

console.log(checkPermutationEfficient("god", "dog"))