/*
For example, the following two sentences are equivalent:
* "He wants to eat food."
* "He wants to consume food."  

* "He wants to eat food."
* "He wants to eat food."  

With synonyms `[['eat', 'consume'], ['big', 'large']]`

walk through the sentences, see if that word exists in set, if it does, replace with that key's pair, compare original sentence with replaced word
*/

function compareSen(str1, str2, arr) {
 
    if(str1 === str2){
        return true
    }
    str1 = stringToWordArray(str1)
    str2 = stringToWordArray(str2)

    if (str1.length != str2.length) {
        return false
    }

    let synonymObj = {}
    
    arr.forEach(item => {
        synonymObj[item[0]] = item[1]
        synonymObj[item[1]] = item[0]
    }) 

	let equivalent = false
    
    str1.forEach((word, index) => {

        if(wordInObj(synonymObj, word)){
            str1[index] = synonymObj[word]
        }
        if (str1.toString() === str2.toString()) {
            equivalent =  true
        }

    })
    return equivalent
}
    
function stringToWordArray(string){
    return string.split(" ")
}

function wordInObj(obj, word){
    return obj[word] !== undefined
}

console.log(compareSen('he wants to eat food', 'he wants to consume food', [['eat', 'consume'], ['big', 'large']]))
