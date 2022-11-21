/*
 * @Date: 2022-11-21 22:46:54
 * @LastEditors: aibo chang
 * @LastEditTime: 2022-11-21 23:17:13
 * @FilePath: \VScodeWork\算法\动态规划\一和零.ts
 * @Description:
 */

function findMaxForm(strs: string[], m: number, n: number) {
  let dp: number[][] = [];
  for (let i = 0; i <= m; i++) {
    let temp: number[] = Array(n + 1).fill(0);
    dp.push(temp);
  }
  for (let i = 0; i < strs.length; i++) {
    let oneNum = strs[i].match(/1/g)?.length || 0;
    let zeroNum = strs[i].match(/0/g)?.length || 0;
    console.log(oneNum, zeroNum);
    for (let j = m; j >= zeroNum; j--) {
      for (let k = n; k >= oneNum; k--) {
        dp[j][k] = Math.max(dp[j][k], dp[j - zeroNum][k - oneNum] + 1);
      }
    }
  }
  return dp[m][n];
}
let strs = ["10", "0001", "111001", "1", "0"],
  m = 3,
  n = 3;
console.log(findMaxForm(strs, m, n));
