function twoNumberSum(array, targetSum) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    array.filter((el, idx, a) => {
      if (a[i] != el)
      if (a[i] + el == targetSum)
      result.push(el)
    });
  }
  return result.sort((a, b) => a - b);
}

console.log("T1", twoNumberSum([4, 6], 10));       // [4, 6]
console.log("T2", twoNumberSum([4, 6, 1], 5));      // [1, 4]
console.log("T3", twoNumberSum([4, 6, 1, -3], 3)); // [-3, 6]
console.log("T4", twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)); // [-1, 11]
console.log("T5", twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17)); // [8, 9]
console.log("T6", twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18)); // [3, 15]
console.log("T7", twoNumberSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5)); // [-5, 0]
console.log("T8", twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163)); // [-47, 210]
console.log("T9", twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164)); // []
console.log("T10", twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 15)); // []
