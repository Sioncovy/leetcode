// https://leetcode.cn/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof
/*
请务必仔细读题看清规则，小数：.num num.num num. 都是合法的
*/
function isNumber(s: string): boolean {
  let dot: boolean = false // .
  let sign: boolean = false // + -
  let e: boolean = false // e E
  let num: boolean = false
  if (!s) return false
  s = s.trim()
  for (let i = 0; i < s.length; i++) {
    if (
      (s[i] === '+' || s[i] === '-') &&
      (i === 0 || s[i - 1] === 'e' || s[i - 1] === 'E')
    ) {
      continue
    } else if (s[i] >= '0' && s[i] <= '9') {
      num = true
    } else if ((s[i] === 'e' || s[i] === 'E') && !e && num) {
      e = true
      num = false
    } else if (s[i] === '.' && !dot && !e) {
      dot = true
    } else {
      return false
    }
  }
  return num
}

console.log(isNumber('1.2.3'))
