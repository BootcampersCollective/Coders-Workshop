#!/usr/bin/env node

const twoSum = (nums, target) => {
  const { length } = nums
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}
