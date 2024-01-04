/*
For example, given `['Or is it the taco that makes the chili spicy', 'Closer the neighbor, further the anger', 'The anxious queen will surrender']`

Your function should return `['The anxious queen will surrender', 'Closer the neighbor, further the anger', 'Or is it the taco that makes the chili spicy']`

* We can use .sort()
* .sort() accepts a callback function that takes two values that we can use for comparison
	* write a condition for the sort function
* for each string, have to find the longest consecutive values, can use as a score for the comparion
* custom compare

* separate problem: what is the length of the longest continuous vowels in a string?
	* loop over the string, check each character
	* create maxCount variable
	* if it's a vowel, add 1 to count
	* if not a vowel, 
		* if count > maxCount, replace maxCount with count 
		* reset count
    * return maxCount

1 out of order (swap)
-1 in order
0 stay original
*/

const countContinuousVowels = (str) => {
    const vowels = new Set(['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U']);
    let count = 0;
    let maxCount = 0;

    for(let i=0; i<str.length; i++){
        if(vowels.has(str[i])){
            count++;
        } else {
            if(count > maxCount){
                maxCount = count;
            }
            count = 0;
        }
    }

    return maxCount;
}

const sortLongestContinuousVowels = (arr) => {
    arr.sort((str1, str2) => {
        if(countContinuousVowels(str1) > countContinuousVowels(str2)){
            return -1;
        } else if(countContinuousVowels(str1) < countContinuousVowels(str2)){
            return 1;
        } else {
            return 0;
        }
    })

    return arr;
}

console.log(sortLongestContinuousVowels([
	'Or is it the taco that makes the chili spicy',
	'Closer the neighbor, further the anger',
	'The anxious queen will surrender']))
