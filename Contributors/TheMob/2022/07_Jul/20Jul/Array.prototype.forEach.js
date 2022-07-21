// reimplement forEach

function forEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i)
  }
}

function twoSum (arr, target) {
  const remainders = new Map(); // get, set, has
  const resultArr = [];

  forEach(arr, (num, idx) => {
    if (remainders.has(num)) {
		if (resultArr.length < 2) {
			resultArr.push(remainders.get(num), idx)
		}
	} else if (!remainders.has(target - num)) {
		remainders.set(target - num, idx)
	}
  })

  return resultArr;
}

console.log(twoSum([2, 7, 11, 15], 9))
