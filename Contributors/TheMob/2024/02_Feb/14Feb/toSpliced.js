
/*
const months = ["Jan", "Mar", "Apr", "May"];

// Inserting an element at index 1
const months2 = toSpliced(months, 1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]


// Deleting two elements starting from index 2
const months3 = toSpliced(months2, 2, 2);
console.log(months3); // ["Jan", "Feb", "May"]

// Replacing one element at index 1 with two new elements
const months4 = toSpliced(months3, 1, 1, "Feb", "Mar");
console.log(months4); // ["Jan", "Feb", "Mar", "May"]

*/

// array, startIndex, deleteCount, item1, item2... 

function toSpliceMethod(array, startIndex, shift, ...args){
    let end = startIndex + shift
    return array.slice(0, startIndex)
		.concat(...args)
		.concat(array.slice(end))
}

const months = ["Jan", "Apr", "May"];
const months2 = toSpliceMethod(months, 1, 0, "Feb", "Mar");

// Inserting an element at index 1
const months3 = toSpliceMethod(months, 1, 0, "Feb");
console.log(months3); // ["Jan", "Feb", "Apr", "May"]


// Deleting two elements starting from index 2
const months4 = toSpliceMethod(months3, 2, 2);
console.log(months4); // ["Jan", "Feb", "May"]

// Replacing one element at index 1 with two new elements
const months5 = toSpliceMethod(months4, 1, 1, "Feb", "Mar");
console.log(months5); // ["Jan", "Feb", "Mar", "May"]
console.log(months.toString() === ["Jan", "Apr", "May"].toString())
