// arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])

const reduce = (arr, callback, initialValue = 0) => {
    for (let i = 0; i < arr.length; i++) {
     initialValue = callback(initialValue, arr[i]);
    }
    return initialValue;
};


let testArr = [1,2,3];
const testFunction = (accum, currVal) => {
    return accum + currVal
};


let testArr2 = [[1,2], [3,5], [9,11,13]];
const testFunction2 = (accum, currVal) => {
  return accum.concat(currVal);
};
console.log(reduce(testArr2, testFunction2, []));