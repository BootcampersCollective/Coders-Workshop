// For example, given `[1, 3, 3, 4, 7, 1]`, your function should return `[3, 4, 7, 1]`, since the first `1` and `3` are left-most duplicates.
// Given `['a', 'r', 'p', 'a', 'g', 'g']`, return `['r', 'p', 'a', 'g']`

// create new array
// loop backwards
// create hashmap for seen values

const removeDuplicates = (array) => {
    const result = [];
    const seen = {};

    for(let i = array.length -1; i >= 0; i--){
        const val = array[i];
        if(!seen[val]){
            result.push(val);
            seen[val] = true;
        }
    }

    return result.reverse();
}

console.log(removeDuplicates([1, 3, 3, 4, 7, 1])) //[3, 4, 7, 1]
console.log(removeDuplicates(['a', 'r', 'p', 'a', 'g', 'g'])) //['r', 'p', 'a', 'g']
