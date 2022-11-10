/*
 * @Date: 2022-11-10 22:44:24
 * @LastEditors: aibo chang
 * @LastEditTime: 2022-11-11 00:33:02
 * @FilePath: \VScodeWork\算法\动态规划\不同的子序列.js
 * @Description: 给定一个字符串s和一个字符串t，计算在s的子序列中t出现的个数
 */

/**
 * @description: 
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  const sLen = s.length, tLen = t.length
  dp = new Array(sLen + 1)
  for (let i = 0; i < sLen + 1; i++) {
    dp[i] = new Array(tLen + 1).fill(0)
  }
  for (let i = 0; i < sLen + 1; i++) {
    for (let j = 0; j < tLen + 1; j++) {
      if (j == 0) {
        dp[i][j] = 1
      } else if (i == 0) {
        dp[i][j] = 0
      } else {
        if (s[i - 1] == t[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
        } else {
          dp[i][j] = dp[i - 1][j]
        }
      }
    }
  }
  return dp[sLen][tLen]
}


console.log(numDistinct('rabbbit', 'rabbit'))




