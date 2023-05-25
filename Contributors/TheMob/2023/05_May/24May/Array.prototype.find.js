// Expected output: 12
// recursively?
// iterate through each item
// check each item individually to see if calling function on item returns true
// yes: return item
// no: continue to next item
// if we get to end and have no matches, return undefined

const find = (pred, arr) => {
  if (arr.length == 0)
    return undefined;

  const val = arr.shift();

  // arr = [1, 2, 5]
  //val = 1
  // arr = [2, 5]

  if (pred(val))
    return val;

  return find(pred, arr);
}

// shifting is an O(n) operation, so we can save a little by using an interation variable (count)
const find2 = (pred, arr, count = 0) => {
  if (arr.length == 0)
    return undefined;

  const val = arr[count]

  // arr = [1, 2, 5]
  //val = 1
  // arr = [2, 5]

  if (pred(val))
    return val;

  return find(pred, arr, count++);
}

const array1 = [5, 12, 8, 130, 44];

const found = find2((element) => element > 10, array1);

console.log(found);
