const assert = require('assert')

/*
textToNumberBinary("zero one zero one zero one zero one") ➞ "01010101"

textToNumberBinary("Zero one zero ONE zero one zero one") ➞ "01010101"

textToNumberBinary("zero one zero one zero one zero one one two") ➞ "01010101"

textToNumberBinary("zero one zero one zero one zero three one") ➞ ""

textToNumberBinary("zero one zero one zero one zero three zero one") ➞ "01010100"
*/

// input string of number writen in english
// return a string containing 1s and 0s based on the string argument's words
//ignore words that are not zero or one
//return should be multiple of 8  ~ Drop any extra digits 


//split the string by space
//loop array 
// to lower case check if the word is one or zero

// concat 0 or 1 to the string 
// take the mod of t    he length of the result string, length % 8 <-- subtract from string
// use slice()

const textToNumberBinary = (str) => {
    const arr = str.split(" ")

    if(arr.length < 8){
        return "";
    }

    let output = ""

    arr.forEach(string =>{
        const word = string.toLowerCase()
        if(word === 'zero'){
            output += '0';
        } else if( word === 'one'){
            output += '1';
        }
    })

    const remainder = output.length % 8; // 7

    return output.slice(0, output.length - remainder);
}    
      


console.log(textToNumberBinary("zero one zero one zero one zero one"))// ➞ "01010101")

console.log(textToNumberBinary("Zero one zero ONE zero one zero one")) //➞ "01010101")

console.log(textToNumberBinary("zero one zero one zero one zero one one two")) //➞ "01010101"

console.log(textToNumberBinary("zero one zero one zero one zero three")) //➞ "")

console.log(textToNumberBinary("zero one zero one zero one zero three zero one")) //➞ "01010100")
console.log(textToNumberBinary("") === '')

assert.deepStrictEqual(textToNumberBinary("zero one zero one zero one zero three zero one"),  "01010100")
console.log('passed! 👍')

//https://developer.mozilla.org/en-US/docs/Web/API/console/assert

console.assert(textToNumberBinary("zero one zero one zero one zero three zero one") === "01023740100")



    
    