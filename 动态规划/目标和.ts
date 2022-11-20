/*
 * @Date: 2022-11-20 10:22:45
 * @LastEditors: aibo chang
 * @LastEditTime: 2022-11-20 16:29:06
 * @FilePath: \VScodeWork\算法\动态规划\目标和.ts
 * @Description:
 */

function targetSum(nums: number[], S: number): number {
  const sum = nums.reduce((prev, curr) => prev + curr);
  if (S > sum || (S + sum) % 2 === 1) {
    return 0;
  }
  let target: number = (S + sum) / 2;
  let dp: number[] = Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }
  return dp[target];
}
let nums = [1, 1, 1, 1, 1],
  S = 3;
console.log(targetSum(nums, S));
