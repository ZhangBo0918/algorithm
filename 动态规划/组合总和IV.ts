function combineSum(nums: number[], target: number) {
  let dp = Array(target + 1).fill(0);
  dp[0] = 1;
  for (let j = 0; j <= target; j++){
    for (let i = 0; i < nums.length; i++) {
      if (j - nums[i] >= 0) dp[j] += dp[j - nums[i]];
    }
  }
  return dp[target];
}

let nums = [1, 2, 3], target = 4;
console.log(combineSum(nums, target));

