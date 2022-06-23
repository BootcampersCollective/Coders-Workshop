const some = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i)) return true
    }
    return false
};

const mySome = (arr, func) => {
    for (let elem of arr) {
      if (func(elem)) {
        return true;
      }
    }
    return false;
  }

console.log(some([1, 2, 3], (val) => val < 2))
console.log(some([1, 2, 3], (val) => val > 4))
