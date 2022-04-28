// For example, given the string `([])[]({})`, you should return true.

// Given the string `([)]` or `((()`, you should return false.

// "([])[]({})"
// "([)]"
// "((()"
// iterate through string
// use a stack, left-type: stack push, right: check if it matches
// if match, continue
// if no match, no use in continuing

// left: ( [ {

const balancedBrackets = (str) => {
    let stack = []
	const lefts = ['(', '{', '[']
	const matches = {
		')': '(',
		']': '[',
		'}': '{',
	}

    for (let i =0; i<str.length; i++){
        // check str at i to see if it's left or right
        if (lefts.includes(str[i])){
            stack.push(str[i])
        } else {
            let char = str[i]
            let match = matches[char]
            if (stack[stack.length-1]===match){
                stack.pop()
            }
        }
    }

    if (stack.length ===0) {
        return true
    } else {
        return false
    }
}

console.log(balancedBrackets("([inside])[]({})"))
console.log(balancedBrackets("([)]"))
console.log(balancedBrackets(""))
console.log(balancedBrackets("(a + (b + c)^2)"))
