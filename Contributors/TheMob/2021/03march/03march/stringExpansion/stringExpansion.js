// ```js
      
// solve("3(ab)") = "ababab" // because "ab" repeats 3 times
// solve("2(a3(b))" = "abbbabbb" // because "a3(b)" == "abbb", which repeats twice.
// solve("3(b(2(c)))"),"bccbccbcc")
// 3(b(2(c))) -> 3b2c -> 
// ```

// Given a string, return the expansion of that string.

// Input will consist of only lowercase letters and numbers (1 to 9) in valid parenthesis. There will be no letters or numbers after the last closing parenthesis.

function expandString(str) {
    // Base case
    if (/^[a-z]+$/i.test(str)) return str
  
    // Handle if first char is number
    else if(/^[0-9]/.test(str)){
        return expandString(str.slice(2,-1)).repeat(str[0])
    }

    // Handle if first char is `:(` or a letter
    else {
        const letters = str.split('(')[0]
        return letters + expandString(str.slice(2, -1))
    }
}

console.log(expandString('2(c)'))
console.log(expandString('3(ab)'))
console.log(expandString("3(b(2(c)))")) // ,"bccbccbcc"

