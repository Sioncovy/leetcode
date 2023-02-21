/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const hashMap: number[] = []
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = i
  }
  for (let i = 0; i < nums.length; i++) {
    if (
      nums[i] + nums[hashMap[target - nums[i]]] === target &&
      i !== hashMap[target - nums[i]]
    ) {
      return [i, hashMap[target - nums[i]]]
    }
  }
  return []
}
// @lc code=end
