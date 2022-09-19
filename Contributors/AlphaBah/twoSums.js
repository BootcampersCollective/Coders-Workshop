/* eslint-disable indent */


//Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

//     Example
// Given nums = [2, 7, 11, 15] and target = 9, return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9.

const twoSum = (nums, target) => {

    // make sure that there are values:
    if (!nums || !target && nums === undefined || target === undefined) {
        return console.log("add values")
    }

    //remove repeated elements
    const removeRepeatedElmnt = (nums) => {
        return nums.filter((item, index) => nums.indexOf(item) === index)

    }
    const filteredElements = removeRepeatedElmnt(nums)


    let indecise = []
    for (let i = 0; i < filteredElements.length; i++) {
        const nextValueOnTheRight = filteredElements[i + 1]
        const addedItems = filteredElements[i] + nextValueOnTheRight
        if (addedItems === target) {
            const indexOne = filteredElements.indexOf(filteredElements[i])
            const indexTwo = filteredElements.indexOf(nextValueOnTheRight)
            indecise.push(indexOne, indexTwo)

        }

    }
    return indecise
}
