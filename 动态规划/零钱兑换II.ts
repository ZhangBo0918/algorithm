function coinChange2(amount: number, coins: number[]) {
  let dp = Array(amount + 1).fill(0);
  dp[0] = 1;
  //组合数
  // for (let i = 0; i < coins.length; i++){
  //   for (let j = coins[i]; j <= amount; j++) {
  //     dp[j] += dp[j - coins[i]]
  //   }
  // }

  // 排列数
  for (let j = 0; j <= amount; j++) {
    for (let i = 0; i < coins.length; i++) {
      if (j - coins[i] >= 0) dp[j] += dp[j - coins[i]];
    }
  }
  return dp[amount];
}

let amount = 5,
  coins = [1, 2, 5];
console.log(coinChange2(amount, coins));
