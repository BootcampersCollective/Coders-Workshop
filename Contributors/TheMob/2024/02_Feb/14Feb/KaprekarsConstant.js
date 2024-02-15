
// 1234
/*
4321 - 1234 = 3087
8730 - 0378 = 8352
8532 - 2358 = 6174
*/
// recursion?
let count = 0
function kaprekar(n){
    let val
    if(n === 6174){
        return count
    }
    let stringified = n.toString()
    let nArray = stringified.split("")
    let sorted = nArray.sort()
    let sortedInt = parseInt(sorted.join(""))
    let backwardsInt = parseInt(sorted.reverse().join(""))
	console.log(sortedInt, backwardsInt)
    if(sortedInt > backwardsInt){
        val = sortedInt - backwardsInt
    }else{
        val = backwardsInt - sortedInt
    }
    count++

    return kaprekar(val)
}

console.log(kaprekar(1234))
count = 0;
console.log(kaprekar(3510))
count = 0;
console.log(kaprekar(1459))
