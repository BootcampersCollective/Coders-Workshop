var twoSum = function(nums, target) {
  let testArr = nums;

      for (var i = 0; i < nums.length; i++) {
          for (var k = 1; k < nums.length; k++) {

              if (nums[i] + testArr[k] === target && i != k) {
                  return [i, k];
              }
          }
    }
};

twoSum([2, 7, 11, 15], 9);  // [0, 1]