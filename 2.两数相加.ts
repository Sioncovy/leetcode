/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let add = 0
  const sum = new ListNode()
  let cur = sum
  cur.next = null
  while (l1 && l2) {
    const t = (l1.val + l2.val + add) % 10
    add = Math.floor((l1.val + l2.val + add) / 10)
    l1 = l1.next
    l2 = l2.next
    const node = new ListNode()
    node.val = t
    node.next = null
    cur.next = node
    cur = cur.next
  }
  while (l1) {
    const t = (l1.val + add) % 10
    add = Math.floor((l1.val + add) / 10)
    const node = new ListNode()
    node.val = t
    node.next = null
    cur.next = node
    cur = cur.next
    l1 = l1.next
  }
  while (l2) {
    const t = (l2.val + add) % 10
    add = Math.floor((l2.val + add) / 10)
    const node = new ListNode()
    node.val = t
    node.next = null
    cur.next = node
    cur = cur.next
    l2 = l2.next
  }
  if (add) {
    const node = new ListNode()
    node.val = 1
    node.next = null
    cur.next = node
  }
  return sum.next
}
// @lc code=end
