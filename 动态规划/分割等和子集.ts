/*
 * @Date: 2022-11-20 00:57:15
 * @LastEditors: aibo chang
 * @LastEditTime: 2022-11-20 01:30:26
 * @FilePath: \VScodeWork\算法\动态规划\分割等和子集.ts
 * @Description:
 */

function partitionEqualSubsetSum(nums: number[]): boolean {
  let len: number = nums.length;
  let sum: number = nums.reduce((pre, curr) => pre + curr);
  if (sum % 2) {
    return false;
  }
  let target: number = sum / 2;
  let dp: number[] = Array(1 + target).fill(0);
  for (let i = 0; i < len; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    }
  }
  return dp[target] === target;
}
console.log(partitionEqualSubsetSum([1, 5, 11, 6]));
