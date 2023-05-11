/*
Implement an autocomplete system. That is, given a query string `s` and a set of all possible query strings, return all strings in the set that have `s` as a prefix.
For example, given the query string `de` and the set of strings `[dog, deer, deal]`, return `[deer, deal]`.

accepts array of items that we're querying against
accepts variable we're searching for
filtering array of items that we're querying against
filtered results: all strings in the set/array that have variable we're searching for (string) as a prefix
*/

function autocomplete(query, array) {
    return array.filter((current) => current.startsWith(query))    
}

console.log(autocomplete('dee', ['dog', 'deer', 'deal']))
