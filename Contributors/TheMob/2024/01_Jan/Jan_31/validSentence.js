/*
* The sentence must start with a capital letter, followed by a lowercase letter or a space.
* All other characters must be lowercase letters, separators (`,`,`;`,`:`) or terminal marks (`.`,`?`,`!`).
* There must be a single space between each word.
* The sentence must end with a terminal mark immediately following a word.
*/

// 1.
// look at character code value is between certain values (97 and 123)
// compare with itself toUpperCase(), toLowerCase()

// 2. regular expression

// 3. if string[i] + 1 == space and string[i] == space => no bueno

// 4. get last chracter, must be terminal mark; second to last is a letter

function goodStart(str){
    const letter = new RegExp("[a-z]")
    const capitalLetter = new RegExp("[A-Z]")
    if(capitalLetter.test(str[0]) && 
    letter.test(str[1]))
    {
        return true
    }
    return false
}

function regex(str) {
    let sliced = str.slice(1)
    const regex = new RegExp("[a-z.,;:!? ]")
    for(let char of sliced){
        if (!regex.test(char)) {
            return false
        }
    }
    return true
}

function spacesCorrect(str){
    for(let i = 0; i < str.length; i++){
        if(str[i] === " " && str[i+1] ===" "){
            return false
        }
    }
    return true
}

function goodEnd(str) {
    const terminal = new RegExp("[.!?]")
    const letter = new RegExp("[a-z]")
    if (terminal.test(str[str.length-1]) &&
        letter.test(str[str.length - 2]))  {
            return true
        }
    return false
}

function validSentence(sentence){
     return (goodStart(sentence)&&
       regex(sentence) &&
       spacesCorrect(sentence) &&
       goodEnd(sentence))
}

console.log(validSentence("Hi there."))
console.log(validSentence("Hi there friend."))
console.log(validSentence("Hi there amigo!"))
console.log(validSentence("hI there amigo!"))
console.log(validSentence("Hi  (there!"))
console.log(validSentence("Hi there"))
console.log(validSentence("Hi there ."))
console.log(validSentence("(i there."))


/*
console.log(goodStart("Hi there amigo!"))
console.log(goodEnd("Hi there amigo!"))
console.log(regex("Hi there amigo!"))
console.log(spacesCorrect("Hi there amigo!"))
*/
