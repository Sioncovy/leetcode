/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  if (digits === '') return []
  const mp: Array<string[]> = [
    [],
    [],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z'],
  ]
  const res: string[] = ['']
  for (let i = 0; i < digits.length; i++) {
    const resLen = res.length
    for (let j = 0; j < resLen; j++) {
      const t = res.shift()
      for (let k = 0; k < mp[Number.parseInt(digits[i])].length; k++) {
        res.push(t + mp[Number.parseInt(digits[i])][k])
      }
    }
  }
  return res
}
console.log(letterCombinations('2'))

// @lc code=end
