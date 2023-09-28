


// method that receives two arguments, first is a function (callback), second is array
// callback: will receive each array element as an argument, return boolean
// function should return element that satisfies the condition (boolean === true (truthy)), or null

const find = (callback, array) => {
    for(let i=0; i < array.length; i++){
        if(callback(array[i])){
            return array[i];
        }
    }
    return null;
}

const array1 = [5, 12, 8, 130, 44];
const found = find(element => element > 10, array1);
const found2 = find(element => element === 'house', array1);

console.log(found)
console.log(found2)
