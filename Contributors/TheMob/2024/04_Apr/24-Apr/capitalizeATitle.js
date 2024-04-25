
//For example, an input `"war and peace"` should return `"War and Peace"` and `"the old man and the sea"` should return `"The Old Man and the Sea"`.
// `the`, `and`, `of`, and `for`
// 'the old man and the sea'
// split it into each word, e.g. string.split(' ')
// create Set for exception words
// capitalize first letter, use Set logic to determine if it should be capitalized


function capitalize(str){
	const newString = str[0].toUpperCase() + str.slice(1, str.length)
    return newString
}

function titleMaker(string){
    const store = new Set(["the", "for", "of", "and"])
    let splitArray = string.split(' ')
    splitArray[0] = capitalize(splitArray[0])
    for(let i = 1; i < splitArray.length; i++){
        if(store.has(splitArray[i])){
            continue
        }else{
            splitArray[i] = capitalize(splitArray[i])
        }
	}
    return splitArray.join(" ")
}


console.log(titleMaker('the old man and the sea'))
console.log(titleMaker('war and peace'))
console.log(titleMaker("where the red fern grows."))
