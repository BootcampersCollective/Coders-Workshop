/*
const addLy = addSuffix("ly")

addLy("hopeless") // "hopelessly"
addLy("total") // "totally"

const addLess = addSuffix("less")

addLess("fear") // "fearless"
addLess("ruth") // "ruthless"


*/

function addSuffix(arg) {

	return (str) => str + arg
	
}

const addSuffix2 = (arg) => (str) => str + arg

const addLy = addSuffix("ly")

console.log(addLy("hopeless")) // "hopelessly"
console.log(addLy("total")) // "totally"

const addLess = addSuffix("less")

console.log(addLess("ruth")) // "ruthless"
console.log(addLess(8)) // ???
