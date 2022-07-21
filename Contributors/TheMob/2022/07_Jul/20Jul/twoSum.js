// Given `nums = [2, 2, 7, 11, 15]` and `target = 9`, return `[0, 2]` because `nums[0] + nums[1] = 2 + 7 = 9`.

// dictionary (object/map) with remainders between target - each number
// remainder, index

// { remainder: index }

function twoSum (arr, target) {
  const remainders = new Map(); // get, set, has
  for (let i = 0; i < arr.length; i++) {
	const num = arr[i];
	const idx = i;
    if (remainders.has(num)) {
		return [remainders.get(num), idx]
	} else if (!remainders.has(target - num)) {
		remainders.set(target - num, idx)
	}
  }
}


// function twoSum (arr, target) {
//   const remainders = new Map(); // get, set, has
//   const resultArr = [];
//   arr.forEach((num, idx) => {
//     if (remainders.has(num)) {
// 		if (resultArr.length < 2) {
// 			resultArr.push(remainders.get(num), idx)
// 		}
// 	} else if (!remainders.has(target - num)) {
// 		remainders.set(target - num, idx)
// 	}
//   })
//   return resultArr;
// }

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2, 2, 8, 7, 11, 15], 4))
console.log(twoSum([15, 11, 7, 8, 2, 2], 9))
