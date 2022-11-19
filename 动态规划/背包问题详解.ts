/*
 * @Date: 2022-11-19 22:46:25
 * @LastEditors: aibo chang
 * @LastEditTime: 2022-11-20 00:48:41
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

  //二维数组解法
  // let dp: number[][] = [];
  // for (let i = 0; i < len; i++) {
  //   let temp: number[] = Array(bagWeight + 1).fill(0);
  //   dp.push(temp);
  // }
  // for (let i = weights[0]; i <= bagWeight; i++) {
  //   dp[0][i] = values[0];
  // }
  // console.log(dp);
  // for (let i = 1; i < len; i++) {
  //   for (let j = 0; j <= bagWeight; j++) {
  //     if (j - weights[i] >= 0)
  //       dp[i][j] = Math.max(
  //         dp[i - 1][j],
  //         dp[i - 1][j - weights[i]] + values[i]
  //       );
  //   }
  // }
  // return dp[len - 1][bagWeight];

  //一维数组解法
  // 在使⽤⼆维数组的时候，递推公式：dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
  // 其实可以发现如果把dp[i - 1]那⼀层拷贝到dp[i]上，表达式完全可以是：dp[i][j] = max(dp[i][j], dp[i][j - weight[i]] + value[i]);
  // 与其把dp[i - 1]这⼀层拷贝到dp[i]上，不如只⽤⼀个⼀维数组了，只⽤dp[j]（⼀维数组，也可以理解是⼀个滚动数组）。
  //  ---- 《代码随想录》
  //注意：此时bagWeight采用倒序
  let dp: number[] = Array(bagWeight + 1).fill(0);
  for (let i = 0; i < len; i++) {
    for (let j = bagWeight; j >= weights[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - weights[i]] + values[i]);
    }
  }
  return dp[len + 1];
}

console.log(exampleBag([1, 3, 4], [15, 20, 30], 4));
