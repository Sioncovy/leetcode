/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0
  let lf = 0
  let rt = 0
  let maxLength = 1
  for (let i = 0; i < s.length; i++) {
    rt = i
    for (let j = lf; j < rt; j++) {
      if (s[rt] === s[j]) {
        maxLength = Math.max(maxLength, rt - lf)
        lf = j + 1
      }
    }
  }
  maxLength = Math.max(maxLength, rt - lf + 1)
  return maxLength
}
console.log(lengthOfLongestSubstring('abcabcbb'))

// @lc code=end
