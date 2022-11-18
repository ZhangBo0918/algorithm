/*
 * @Date: 2022-11-19 00:09:49
 * @LastEditors: aibo chang
 * @LastEditTime: 2022-11-19 00:34:17
 * @FilePath: \VScodeWork\算法\动态规划\不同路径.ts
 * @Description:
 */

/**
 * @description:
 * @param {number} m
 * @param {number} n
 * @return {*}
 */
function differentPaths(m: number, n: number): number {
  let dp: any = [];
  for (let i = 0; i < m; i++) {
    dp.push([1]);
  }
  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}
let m = 3,
  n = 3;
console.log(differentPaths(m, n));
