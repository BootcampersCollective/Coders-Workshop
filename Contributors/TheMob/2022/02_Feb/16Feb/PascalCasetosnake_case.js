// PascalCase => pascal_case

// "split" on capitals, make lowercase, join with underscore

function pascalToSnake(string) {
	const newString = String(string);
    const splitArray = [];
    let currString = '';
    for (let c of newString) {
        if (c === c.toUpperCase() && c !== c.toLowerCase()) {
            if (currString) {
                splitArray.push(currString);
            }
            currString = c.toLowerCase();
        } else {
            currString = currString + c;
        }
    }
    
	if (currString) {
		splitArray.push(currString);
	}
    return splitArray.join('_');
}

console.log(pascalToSnake('PascalCase'))
console.log(pascalToSnake('IAte33HamburgersForLunch'))
