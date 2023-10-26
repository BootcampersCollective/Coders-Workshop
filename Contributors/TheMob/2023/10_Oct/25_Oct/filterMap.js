
//For example, with array `[1, 2, 3, 4, 5]`, filter `(x) => (x < 4)`, and map `(x) => x * 2`, filterMap should return `[2, 4, 6]`.
// filterMap(filterFn, mapperFn, arr)
// go over data in one pass
// have condition that comes from filter; if true, then run map function which returns element for new array
// when loop is done, return data



const filterMap = ({ filterFn, mapperFn, arr = []}) => {
    const result = [];

    arr.forEach(item => {
        if(filterFn(item)){
            result.push(mapperFn(item))
        }
    })

    return result;
}

const double = (x) => x * 2
const lessThan4 = (x) => (x < 4)

console.log(filterMap({ filterFn: lessThan4, mapperFn: double, arr: [1, 2, 3, 4, 5] })) // expect [2, 4, 6]
console.log(filterMap({ filterFn: lessThan4, mapperFn: double, arr: [] })) // expect [2, 4, 6]
