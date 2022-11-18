/*
 * @Date: 2022-11-18 07:54:26
 * @LastEditors: aibo chang 
 * @LastEditTime: 2022-11-18 22:25:45
 * @FilePath: \VScodeWork\算法\动态规划\有代价爬楼梯.ts
 * @Description:
 */

const minCostClimbingStairs = (cost: number[] = []) => {
  const costLen: number = cost.length;
  let dp: number[] = [];
  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let i = 2; i < costLen; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  return Math.min(dp[costLen - 1], dp[costLen - 2]);
};

let cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
console.log(minCostClimbingStairs(cost));
