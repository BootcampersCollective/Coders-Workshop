// For example, if you were given input `first_name` your function would return `First Name`.
// Or with input `LAST_NAME` your function would return `Last Name`.

const prettyName = (snake_name) => {
    return snake_name.split('_')
    .filter(val => val !== '' && val !== undefined)
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
	.join(' '); 
}

console.log(prettyName('first_name_bay_Yay'))
console.log(prettyName('LAST_NAME_BAY_YaY'))
console.log(prettyName('last'))
console.log(prettyName('_last'))
console.log(prettyName(''))
