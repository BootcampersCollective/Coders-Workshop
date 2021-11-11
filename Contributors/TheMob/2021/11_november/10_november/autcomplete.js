const { strictEqual } = require('assert');
const assert = require('assert');
// Implement an autocomplete system. That is, given a query string `s` and a set of all possible query strings,
// return all strings in the set that have `s` as a prefix.

// For example, given the query string `de` and the set of strings `[dog, deer, deal]`, return `[deer, deal]`.

// As a follow-up, implement a configuration called `loose` that returns all strings that include the letters contained in `s` in any location, however in order.

// For example, given the query string `de` and the set of strings `[dog, deer, drier, edit ]`, return `[deer, drier]`

// array filter
// [].filter(predicate) (x) => "x starts with y"
// take the query string `s` and use that to filter
// [dog, deer, deal] ==> return all strings that have "de" as their prefix?

// function called autocomplete that will take a query string and a set of possible query strings

function autocomplete(s, query_strings, loose=false){
	if (loose) {
		return looseAutocomplete(s, query_strings)
	}
    const regex = new RegExp(`^${s}`, 'i')
    return query_strings.filter((string)=> regex.test(string))
}

function looseWordIncludes(letters, string) {
    if (letters.length === 1) {
        return string.includes(letters[0])
	}
	if (string.includes(letters[0])){
		return looseWordIncludes(letters.slice(1), string.slice(string.indexOf(letters[0]) + 1) )
	}
	return false
}

function looseAutocomplete(s, query_strings) {
	return query_strings.filter((queryString) => {
		return looseWordIncludes(s, queryString)
	})
}

assert.deepStrictEqual(autocomplete('de', ["dog", "deer", "deal"], false), ['deer', 'deal'])
assert.deepStrictEqual(autocomplete('de', ["dog", "deer", 'drier', "edit" ], true), ['deer', 'drier'])
console.log('All tests passed!')
