// implement Array.isArray

// isArray()
// take in a variable
// use typeof
// create variable type = typeof arg, returns string, parse it, check if the type is array, can return true; else false


function isArray(thing){
    const type = typeof thing;
    if(type === "object"){
        if(thing.length !== undefined){
			return true;
        } else {
			return false;
		}
    } else {
		return false;
	}
}

console.log(isArray({}))
console.log(isArray('*'))
console.log(isArray([]))
console.log(isArray(4))
