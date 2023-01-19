// Write a function to reverse every other word in a string. For reference, the first word should not be reversed, the second should be.
// For example, given `reverse this string`, your function should return `reverse siht string`. Given `Drink more coffee, if you would`, return `Drink erom coffee, fi you dluow`.
// You may consider punctuation part of the word. So given `Hi there, you don't have a nametag`, return `Hi ,ereht you t'nod have a nametag`

// forEach

// take string, break up string so each word is an item in the array
// check if it's odd indexed, if so reverse
// (if letter comes after space, indicates it's new word)
// split(' ') => ['reverse', 'this', 'string']

const reverseString = (word) => word.split("").reverse().join("")

const safeSplit = (string, splitter) => {
 if (typeof string !== 'string') {
	return string;
 }
 string.split(splitter);
}

function reverseEveryOtherWord(string){
 const wordsArr = safeSplit(string, splitter);

    let reverseArr = [];
    //['reverse', 'this', 'string']
    wordsArr.forEach((word, i) => {
		if (i % 2 != 0) {
            //'this' > ['t','h','i','s'] > ['s', 'i', 'h', 't']
            reverseArr.push(reverseString(word)); 
		} else { 
            reverseArr.push(word)
        }
	})
    return reverseArr.join(" ");
}

console.log(reverseEveryOtherWord("Hi there, you don't have a nametag"));
console.log(reverseEveryOtherWord(""));
