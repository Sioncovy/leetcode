// https://leetcode.cn/problems/clone-graph/
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

/*
就是个简单的图的遍历，但因为对 js 的特性还不是特别熟练，走了很多弯路
可以用 map 来直接对原节点和新节点映射
对象就是浅拷贝，变化后会跟着变
注意不要重复添加进去了
*/

function cloneGraph(node: Node | null): Node | null {
  let vis: Boolean[][] = [[]]
  let nodeList: Node[] = []

  const cloneDFS = (oldCrtNode: Node) => {
    if (!oldCrtNode) return null
    if (nodeList[oldCrtNode.val]) {
      return nodeList[oldCrtNode.val]
    }

    const newCrtNode: Node = new Node(oldCrtNode.val)
    nodeList[oldCrtNode.val] = newCrtNode

    for (let i = 0; i < oldCrtNode.neighbors.length; i++) {
      // newCrtNode.neighbors.push(nodeList[oldCrtNode.neighbors[i].val])
      newCrtNode.neighbors.push(cloneDFS(oldCrtNode.neighbors[i]))
    }
    return newCrtNode
  }
  return cloneDFS(node)
}
