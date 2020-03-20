const twoSum = function(nums, target) {
  let result = [];

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      const sum = nums[i] + nums[j];
      if (sum === target) {
        result.push(i, j);
        return result;
      }
    }
  }
};

twoSum([2, 7, 11, 15], 9);
