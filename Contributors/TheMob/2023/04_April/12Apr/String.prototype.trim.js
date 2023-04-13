/*
`trim('   hi     ')` should return `'hi'`
`trim('there   ')` should return `'there'`
`trim('hi  there')` should return `'hi  there'` (no change since there was no whitespace at either end)
*/

// for loop
// where is the white space
// iterate forward until you hit something that's not whitespace
// do the same thing backwards
// not whitespace: save value in something; adding to array then joining at the end
// don't do anything


function trim(string){
    let startIndex = -1
    let endIndex = -1

    for(let i = 0; i < string.length; i++){

        if(string[i] != " "){
            startIndex = i
			break;
        }
    }
    for(let i = string.length-1; i > 0; i--){
        if(string[i] != " "){
            endIndex = i + 1
			break;
        }
    }

    return string.slice(startIndex, endIndex)
}
console.log(trim('   hi     ')) // should return `'hi'`
console.log(trim('there   '))// should return `'there'`
console.log(trim('hi  there'))//` should return `'hi  there'` (no change since there was no whitespace at either end)
console.log(trim('         ').length) // should return 0 (empty string)
