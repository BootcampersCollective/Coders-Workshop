/*
callbackFn

A function to execute for each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn. For the last invocation, the return value becomes the return value of reduce(). The function is called with the following arguments:
accumulator
The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].
currentValue
The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].
currentIndex
The index position of currentValue in the array. On the first call, its value is 0 if initialValue is specified, otherwise 1.
*/

const reduce = (array, cb, initialValue) => {
    let result = initialValue
    for(let i=0; i < array.length; i++){
        const currentValue = array[i];
        result =  cb(result, currentValue, i)
    }
    return result;
}

const reduce2 = (array, cb, initialValue) => {
    if(array.length === 0){
        return initialValue;
    }
    const currentValue = array[0];
    initialValue = cb(initialValue, currentValue)
    return reduce2(array.slice(1), cb, initialValue)
}

const reduce3 = (array, cb, initialValue) => array.length
	? reduce3(array.slice(1), cb, cb(initialValue, array[0]))
	: initialValue

const reduce4 = (array, cb, initialValue, index = 0) => index < array.length
	? reduce4(array, cb, cb(initialValue, array[index], index), index+1)
	: initialValue

console.log(reduce4([1, 2, 3], (acc, num)=> { acc+= num; return acc;}, 0)) // 6
console.log(reduce4(["1", "2", "3"], (acc, num)=> { acc+= num; return acc;}, "")) // "123"
console.log(reduce4([{name: 'A'},{name:'B'},{name:'C'}], (persons, person)=> { persons.push(person.name); return persons;}, [])) // ['A','B','C'],
