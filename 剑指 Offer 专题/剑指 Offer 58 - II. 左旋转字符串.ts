// https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/
function reverseLeftWords(s: string, n: number): string {
  let str = ''
  for (let i = n; i < s.length + n; i++) {
    str += s[i % s.length]
  }
  return str
}
