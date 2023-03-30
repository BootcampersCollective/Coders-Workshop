/*
const f1 = always("apple")
f1() ➞ "apple"

const f2 = always("pear")
f2("something else") ➞ "pear"

const f3 = always("")
f3() ➞ ""
*/




const always = (variable) => {
	return () => variable || ""
}

const f1 = always("apple")
const f2 = always("pear")
const f3 = always("banana")

console.log(f1()) // "apple"
console.log(f2("something else")) // "pear"
console.log(f3()) // "banana"
