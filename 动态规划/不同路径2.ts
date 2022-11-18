/*
 * @Date: 2022-11-19 00:37:24
 * @LastEditors: aibo chang
 * @LastEditTime: 2022-11-19 01:10:37
 * @FilePath: \VScodeWork\算法\动态规划\不同路径2.ts
 * @Description: js的二维数组真的麻烦
 */

/**
 * @description:
 * @param {number[][]} obstacleGrid
 * @return {*}
 */
function differentPathsWithObstacle(obstacleGrid: number[][]): number {
  let dp: any = [];
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  for (let i = 0; i < m; i++) {
    let temp = Array(n).fill(0);
    dp.push(temp);
  }
  for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
    dp[i][0] = 1;
  }
  for (let i = 0; i < n && obstacleGrid[0][i] === 0; i++) {
    dp[0][i] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) continue;
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}

let obstacleGrid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
console.log(differentPathsWithObstacle(obstacleGrid));
