// reimplement filter

// [1, 2, 3, 4].filter((x) => x > 2) // -> [3, 4]
// [1, 2, 3, 4].filter((x) => x === 4) // -> [3, 4]
// create args: filter function (predicate), array
// iterate over array, use the predicate against the current value

function filterFunction(array, predicate) {
    let result = [];

    for(let value of array){
        if(predicate(value)){
            result.push(value)
        }
    }
    return result
}

const greaterThan2 = (x) => x > 2
console.log(filterFunction([1, 2, 3, 4], greaterThan2))
console.log(filterFunction([1, 2, 3, 4], (x) => x === 2))
console.log(filterFunction([1, 2, 3, 4], (x) => 13))
// console.log(filterFunction([], (x) =>))
