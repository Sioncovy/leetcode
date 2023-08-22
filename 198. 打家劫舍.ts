function rob(nums: number[]): number {
  const len = nums.length
  const dp: Array<number> = [0, nums[0]]
  for (let i = 2; i <= len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
  }
  return dp[len]
}

console.log(rob([2, 7, 9, 3, 1]))
