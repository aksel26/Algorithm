/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];
      if (sum === target) answer = [i, j];
    }
  }
  console.log("answer: ", answer);
};

twoSum([2, 7, 11, 15], 9);
twoSum([3, 3], 6);
