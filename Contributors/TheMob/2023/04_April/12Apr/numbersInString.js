
/*
`numInStr(["1a", "a", "2b", "b"])` ➞ `["1a", "2b"]`

`numInStr(["abc", "abc10"])` ➞ `["abc10"]`

`numInStr(["abc", "ab10c", "a10bc", "bcd"])` ➞ `["ab10c", "a10bc"]`

`numInStr(["this is a test", "test1"])` ➞ `["test1"]`

`numInStr(["this is a test", "test"])` ➞ `[]`
*/

// typeof item === number?
// use filter?
// character code
// loop through each string
// between 48 and 57 are numbers
// atChar() to get character code 


function numInStr (arr){
	return arr.filter(item => { // "abc" "ab10c"
		for(let i = 0; i < item.length; i++){
			if(item.charCodeAt(i) >= 48 && item.charCodeAt(i) < 10 ){
		return true
			}
		}
	})
}
console.log(numInStr(["abc", "ab10c", "a10bc", "bc@#(3&*$d"]))

const numInStrReg = (arr) => arr.filter(item => /\d/.test(item))

console.log(numInStrReg(["abc", "ab10c", "a10bc", "bc@#(3&*$d"]))
