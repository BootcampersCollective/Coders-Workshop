
// Given a string of words separated by spaces, return a map from each word in the string to the count of that word.
// For example, given the following string:

/*
{
  "give": 1,
  "a": 2,
  "little": 2,
  "get": 1
}
*/

// split into array on space character
// create a hash with each word as a key
// loop over array
// if word is not in hash, put it in hash, with value 1
// else if it is in the hash, increment the value
// return that initial hash




function countWords(str){
    // if not a string passed, return empty object
    if (typeof str !== 'string') return {}
    //Not sure if regex will maintain spaces
    var wordArr = str.split(/\s+/);
    let words = {};

    wordArr.forEach(word => {
        if (!words[word]){
            // if word is not in hash, put it in hash, with value 1
            words[word] = 1
        } else {
            // else if it is in the hash, increment the value
            // return that initial hash
            words[word]++
        }
    });
    return words
}

console.log(countWords('give a little get a little'))