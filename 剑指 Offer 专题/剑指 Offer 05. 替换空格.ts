// https://leetcode.cn/problems/ti-huan-kong-ge-lcof/submissions/
function replaceSpace(s: string): string {
  let str = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      str = str + s[i]
    } else {
      str = str + '%20'
    }
  }
  return str
}
