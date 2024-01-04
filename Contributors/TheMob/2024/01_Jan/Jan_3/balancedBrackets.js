/*

For example, given the string `([])[]({})`, you should return true.
Given the string `([)]` or `((()`, you should return false.

 we can use a stack to keep track of last open bracket

 loop over the string
	* check if open or closed
		* if open, push to stack
		* if closed, check if it's the same type of bracket at the top of the stack (last item in array)
			* if matched, pop stack
			* if not matched, return false
	* if stack empty, return true; else return false

*/

const isBalancedBrackets = (brackets) => {
    const stack = [];
    const bracketPairs = { '}': '{', ']': '[', ')': '('}

    for(let i=0; i < brackets.length; i++){
        const b = brackets[i]
        if (b === '(' || b === '{' || b === '['){
            stack.push(b)
        } else {
            const lastOpenBracket = stack.pop();
            if(bracketPairs[b] !== lastOpenBracket){
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isBalancedBrackets('([])[]({})')) // true
console.log(isBalancedBrackets('((]')) // false
