const predicate = (acc, currItem) => acc < 3

function reduceWhile (fn, accum, arr, pred) {
  if (arr.length === 0 || pred(accum, arr[0]) === false) return accum
  return reduceWhile(fn, fn(accum, arr[0]), arr.slice(1), pred)
}

console.log(reduceWhile((acc, currItem) => acc + currItem, 0, [1,2,3,4,5], predicate))
