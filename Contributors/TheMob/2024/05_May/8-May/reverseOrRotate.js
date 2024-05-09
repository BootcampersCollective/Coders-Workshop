/*
If a chunk represents an integer such that the sum of the cubes of its digits is divisible by 2, reverse that chunk;
otherwise rotate it to the left by one position.

Put together these modified chunks and return the result as a string.

If

`sz` is <= 0 or if str is empty return `""`
`sz` is greater (>) than the length of str it is impossible to take a chunk of size sz hence return `""`.
revrot("123456987654", 6) --> "234561 876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"

Example of a string rotated to the left by one position:
s = "123456" gives "234561".

convert to array into chunk sizes
convert string to integer
*/

const assert = require('assert');

function reverse(arr){
    let first = 0
    let last = arr.length - 1
    while(first <= last){
        let temp = arr[first]
        arr[first] = arr[last]
        arr[last] = temp
        first++
        last--
    }
    return arr  
}

assert.deepStrictEqual(reverse([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1], 'Reverse fails!')

function rotate(arr){
    let popped = arr.shift()
    arr.push(popped)
    return arr
}

function cubedDigits(chunk){
    return chunk.reduce((acc, val) => {
        integer = parseInt(val)
        acc += Math.pow(val, 3)
        return acc
    }, 0)
}

function revrot(str, size){
    if(str.length < size || size ===0 || str.length === 0) return ''

    let result = []

    let splitted = str.split("")
    while(splitted.length >= size){
        let chunk = splitted.slice(0, size)
        splitted.splice(0, size)
        let wholeNum = cubedDigits(chunk)
        let newChunk
        if(wholeNum % 2 === 0){
            newChunk = reverse(chunk)
        }else{
            newChunk = rotate(chunk)
        }
        result = result.concat(newChunk)

    }

    return result.join("")
}



console.log('answer', revrot("123456987654", 6))  //"234561876549"
console.log('answer', revrot("123456987653", 6))  //"234561356789"
console.log('answer', revrot("66443875", 4)) //"44668753"
console.log('answer', revrot("66443875", 8)) //"64438756"
console.log('answer', revrot("664438769", 8)) //"67834466"
console.log('answer', revrot("123456779", 8)) //"23456771"
console.log('answer', revrot("", 8))  //""
console.log('answer', revrot("123456779", 0))  //""
console.log('answer', revrot("563000655734469485", 4))  //"0365065073456944"
