/*
 * @Date: 2022-11-20 01:31:59
 * @LastEditors: aibo chang
 * @LastEditTime: 2022-11-20 10:01:19
 * @FilePath: \VScodeWork\算法\动态规划\最后一块石头的重量.ts
 * @Description:
 */

function lastStoneWeight(stoneWeights: number[]): number {
  const len: number = stoneWeights.length;
  const sum = stoneWeights.reduce((prev, curr) => prev + curr);
  const target = Math.floor(sum / 2);
  let dp: number[] = Array(target + 1).fill(0);
  for (let i = 0; i < len; i++) {
    for (let j = target; j >= stoneWeights[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stoneWeights[i]] + stoneWeights[i]);
    }
  }
  return sum - 2 * dp[target];
}

console.log(lastStoneWeight([31, 26, 33, 21, 40]));
