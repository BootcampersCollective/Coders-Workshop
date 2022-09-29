/* eslint-disable indent */


//Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

//     Example
// Given nums = [2, 7, 11, 15] and target = 9, return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9.
// Given nums = [2, 15, 7, 11] and target = 9, return [0, 2] because nums[0] + nums[2] = 2 + 7 = 9.
// Given nums = [4, 3, 4, 5] and target = 8, return [0, 2] because nums[0] + nums[2] = 4 + 4 = 8.

const twoSum = (nums, target) => {

    // make sure that there are values:
    if (!nums || !target && nums === undefined || target === undefined) {
        return console.log("add values")
    }

    let indicies = []
    for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {

        const addedItems = nums[i] + nums[j]
        if (addedItems === target) {
			indicies.push(i, j)
		}
    }
}

return indicies
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2, 15, 7, 11], 9))
