#!/usr/bin/env python3

def two_sum(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    for i in range(len(nums)):
        mid = target - nums[i]
        for j in range(i + 1, len(nums)):
            if nums[j] == mid:
                return [i, j]


print(two_sum([2, 7, 11, 15], 9))  # [0, 1]
