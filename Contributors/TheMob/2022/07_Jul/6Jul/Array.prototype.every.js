// every([1, 2, 3], (val) => val < 4)` should return `true`. `every([1, 2, 3], (val) => val < 3)` should return `false`
function every(array, fn) {
    for (var i = 0; i < array.length; i++) {
        var result = fn(array[i]);
        if (!result) {
            return false;
        }
    }
    return true;
}
console.log(every([1, 2, 3], function (val) { return val < 4; })); // true
console.log(every([1, 2, 3], function (val) { return val > 5; })); // false
console.log(every([3, 67, 11], function (val) { return val === 2; })); // false
// every([], (val) => val === 2)
