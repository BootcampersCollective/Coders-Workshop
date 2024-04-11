/*
`trim('   hi     ')` should return `'hi'`
`trim('there   ')` should return `'there'`
`trim('hi  there')` should return `'hi  there'` (no change since there was no whitespace at either end)
*/

// look at first, last index of string
// two while loops, while space at beginning remove spaces

function trimmed(input){
    function process(str){
        let arr = str.split('')
        while(arr[0] === ' '){
            arr.shift()
        }
        while(arr[arr.length -1] === ' '){
            arr.pop()
        }
        return arr.join('')
    }
    let type = typeof input
	if (type === 'string') {
		return process(input)
	} else if (Array.isArray(input)) {
		return input.map(element => {
			return trimmed(element)
		});
	} else if(type === "object"){
        for(const [key, val] of Object.entries(input)){
            input[key] = trimmed(val)
        }
    }
    return input
}


console.log(trimmed('there   '))
console.log(trimmed('   hi     '))
console.log(trimmed(['hey ther   ', '   hi  ', 'hello']))
console.log(trimmed('  ') === '')

console.log(trimmed([{'first': "   hello   "},
{'second': "hi   "},
{"third": "hello there"}]))
console.log(trimmed({name: {first: 'benjamin     '}}))

console.log(trimmed(false))
