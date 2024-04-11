/*
For example, input `["flower","flow","flight"]` should return `"fl"` since "fl" is the longest common prefix among all the strings.
Input `["deer","drought","drink"]` should return `"d"`.
Input `["dog","racecar","car"]` should return `""` since there are no common prefixes among the strings.
*/


function lcp(input){
    if(!input.length){
        return ''
    }
    let prefix = input[0] // flower

    for(let i = 1; i < input.length; i++){
        while(input[i].indexOf(prefix) !== 0){
            prefix = prefix.substring(0, prefix.length - 1)
            if(prefix === ''){
                return ''
            }
        }
        
    }
    return prefix
}

console.log(lcp([]))
console.log(lcp(["deer","drought","drink"]))
console.log(lcp(["dog","racecar","car"]))
console.log(lcp(["dog","dog","dog"]))
