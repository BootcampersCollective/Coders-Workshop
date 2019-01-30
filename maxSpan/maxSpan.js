function maxSpan(arr) {
  let result = 1;
  return arr.reduce((acc, curV, i, a) => {
    if (i == 0 && a.lastIndexOf(curV) > a.indexOf(curV)) {
      result += a.lastIndexOf(curV);
    } else if (a.lastIndexOf(curV) > a.indexOf(curV)) {
      return a.lastIndexOf(curV);
    } else return result;
  }, 0);
}

console.log(maxSpan([1, 2, 1, 1, 3])); // 4
console.log(maxSpan([1, 2, 1, 1, 3, 2])); // 5
console.log(maxSpan([1, 4, 2, 1, 4, 1, 4])); //→ 6
console.log(maxSpan([1, 4, 2, 1, 4, 4, 4])); //→ 6
