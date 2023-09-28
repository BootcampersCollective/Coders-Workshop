


// method that receives two arguments, first is a function (callback), second is array
// callback: will receive each array element as an argument, return boolean
// function should return element that satisfies the condition (boolean === true (truthy)), or null



function find2<K>(callback: (item:K) => boolean, array: K[]): K | null {
    for(let i=0; i < array.length; i++){
        if(callback(array[i])){
            return array[i];
        }
    }
    return null;
}

const array11 = [5, 12, 8, 130, 44];

const found23 = find2((ele) => ele > 12, array11);

console.log(found23)
