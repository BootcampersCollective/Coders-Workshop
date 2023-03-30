/*
addLy = addSuffix("ly")

addLy("hopeless") ➞ "hopelessly"
addLy("total") ➞ "totally"

addLess = addSuffix("less")

addLess("fear") ➞ "fearless"
addLess("ruth") ➞ "ruthless"
*/

const addSuffix = (suffix) => (word) => `${word}${suffix}`

const addLy = addSuffix("ly")

console.log(addLy("hopeless")) // "hopelessly"
console.log(addLy("total")) // "totally"
