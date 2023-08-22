function climbStairs(n: number): number {
  const cnt: Array<number> = [1, 1, 2]
  for (let i = 2; i <= n; i++) {
    cnt[i] = cnt[i - 1] + cnt[i - 2]
  }
  return cnt[n]
}
