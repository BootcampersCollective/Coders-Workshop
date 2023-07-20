/*
includes('Four score and seven years ago', 'score') // => returns true since 'score' is in the original string
includes('Four score and seven years ago', 'four') // => returns false since the search should be case-sensitive
includes('Four score and seven years ago', 'Four', 2) // => returns false since the position argument indicates the search should begin at index 2
includes('', '') // => returns true because JS interpreter is kind of weird
*/

// check for first character of search string in target string

// make sure that strings aren't empty
	// if empty: return false
	// both empty? could return true

// check length - if not enough characters to match, return false
// start at the starting position
	// comparing search iterating
// comparing substrings of the length of the search string in the target string with the search string

function customInclude( searchable, search, startingIndex = 0){
    let searchableLen = searchable.length
    let searchLen = search.length
	if (searchableLen <  searchLen) {
		return false;
	}

    if (searchLen === 0) {
        return true
	}

	let result = false;

	for (let i = startingIndex; i < searchableLen; i++) {
		if (searchable.slice(i, i + searchLen) === search) {
			result = true;
		}
	}
	return result;
    
    //return searchable.slice(startingIndex).indexOf(search) !== -1;
}

function customInclude( searchable, search, startingIndex = 0){
	return searchable.slice(startingIndex).indexOf(search) !== -1;
}

console.log(customInclude('Four score and seven years ago', 'score')) // => returns true since 'score' is in the original string
console.log(customInclude('Four score and seven years ago', 'four')) // => returns false since the search should be case-sensitive
console.log(customInclude('Four score and seven years ago', 'Four', 2)) // => returns false since the position argument indicates the search should begin at index 2
