/**
* Capitalize a title
* Write a function that takes a string and properly capitalizes it as if it were the title of a work of art.

* Your function should not use any built-in capitalization functions (e.g. toUpperCase())

* The first word should begin with an uppercase, and each subsequent word should begin with an uppercase except the words the, and, of, and for.

* For example, an input "war and peace" should return "War and Peace" and "the old man and the sea" should return "The Old Man and the Sea"
**/

//version 1
export class CapitalizeTitle {

    static capitalizeTitleFunctional(str: string) {
        if (!str) return str;
        const words = str.trim().split(" ");
        const wordsExcluded = ["and", "the", "of", "for"];
        return words
            .filter(p => p !== "")
            .map((word, index) => {
                if (word && (wordsExcluded.indexOf(word) === -1 || index === 0)) {
                    const upper = String.fromCharCode(word[0].charCodeAt(0) - 32);
                    return upper + word.substring(1);
                } else {
                    return word;
                }
            })
            .join(" ");
    }

    static capitalizeTitleImperative(str: string) {
        if (!str) { return str; }
        let words = str.trim();
        const wordsExcluded = ["and", "the", "of", "for"];

        let x = words.indexOf(" ");
        if (x === -1) {
            return String.fromCharCode(str[0].charCodeAt(0) - 32) + words.substring(1);
        }
        else {
            let newStr = "";
            while (words && x !== -1) {
                const word = words.substring(0, x).trim();
                if (wordsExcluded.indexOf(word) !== -1) {
                    newStr +=  word + " ";
                }
                else {
                    const up = String.fromCharCode(word[0].charCodeAt(0) - 32);
                    newStr += up + word.substring(1) + " ";
                }
                words = words.substring(x+1).trim();
                x = words.indexOf(" ");
            }
            if (newStr[0].charCodeAt(0) >= 97) {
                return String.fromCharCode(newStr[0].charCodeAt(0) - 32) +
                    newStr.substring(1) +
                    String.fromCharCode(words[0].charCodeAt(0) - 32) +
                    words.substring(1);
            } else {
                return  newStr +
                    String.fromCharCode(words[0].charCodeAt(0) - 32) +
                    words.substring(1);
            }
        }
    }
}