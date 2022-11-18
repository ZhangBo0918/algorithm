/*
 * @Date: 2022-11-19 01:14:32
 * @LastEditors: aibo chang
 * @LastEditTime: 2022-11-19 01:37:36
 * @FilePath: \VScodeWork\算法\动态规划\整数拆分.ts
 * @Description: 给定⼀个正整数 n，将其拆分为⾄少两个正整数的和，并使这些整数的乘积最⼤化。 返回你可以获得的最⼤乘积。
 */

/**
 * @description:
 * @param {number} n
 * @return {*}
 */
const splitInterger = (n: number): number => {
  let dp: number[] = Array(n + 1).fill(0);
  // 因为0和1不能拆分，所以dp从2开始
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i - 1; j++) {
      dp[i] = Math.max(dp[i], Math.max((i - j) * j, j * dp[i - j]));
    }
  }
  return dp[n];
};

let n = 10;
console.log(splitInterger(n));
