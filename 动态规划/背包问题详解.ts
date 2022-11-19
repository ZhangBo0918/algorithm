/*
 * @Date: 2022-11-19 22:46:25
 * @LastEditors: aibo chang aibochang@163.com
 * @LastEditTime: 2022-11-19 23:19:54
 * @FilePath: \VScodeWork\算法\动态规划\背包问题详解.ts
 * @Description:
 */

/**
 * 背包最大重量为4
 * 物品            重量            价值
 * 0               1               15
 * 1               3               20
 * 2               4               30
 */

/**
 * 设置dp数组为dp[i][j] 0~i表示物品数组下标  j表示背包容量
 */

function exampleBag(weights: number[], values: number[], bagWeight: number) {
  const len = weights.length;
  let dp: number[][] = [];
  for (let i = 0; i < len; i++) {
    let temp: number[] = Array(bagWeight + 1).fill(0);
    dp.push(temp);
  }
  for (let i = weights[0]; i <= bagWeight; i++) {
    dp[0][i] = values[0];
  }
  console.log(dp);
  for (let i = 1; i < len; i++) {
    for (let j = 0; j <= bagWeight; j++) {
      if (j - weights[i] >= 0)
        dp[i][j] = Math.max(
          dp[i - 1][j],
          dp[i - 1][j - weights[i]] + values[i]
        );
    }
  }
  return dp[len - 1][bagWeight];
}

console.log(exampleBag([1, 3, 4], [15, 20, 30], 4));
