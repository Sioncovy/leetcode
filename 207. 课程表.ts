// https://leetcode.cn/problems/course-schedule/

/*
有环图
1. 拓扑：入度为1的删除出队列，若队列中非空且没有度为1的节点，则是有环
2. dfs，从自己出发又找回来了肯定就是有环

*/

// dfs版本
// function canFinish(numCourses: number, prerequisites: number[][]): boolean {
//   const mp: number[][] = []
//   for (let i = 0; i < numCourses; i++) {
//     mp[i] = []
//   }
//   for (let numArr of prerequisites) {
//     const [a, b] = numArr
//     mp[a].push(b)
//   }
//   // console.log(mp)

//   for (let i = 0; i < numCourses; i++) {
//     const vis: boolean[] = []
//     let circle: boolean = false
//     const dfs = (num: number) => {
//       if (circle) {
//         return
//       }
//       for (let j = 0; j < mp[num].length; j++) {
//         if (mp[num][j] === i) {
//           circle = true
//           break
//         }
//         if (vis[mp[num][j]]) {
//           return
//         }
//         vis[mp[num][j]] = true
//         dfs(mp[num][j])
//       }
//     }
//     dfs(i)
//     if (circle) {
//       return false
//     }
//   }
//   return true
// }

// 拓扑
/*
有向环，前置课程 -> 想学课程，统计课程的入度，入度为 0 的表示没有还需要学的前置课程了，可以现在学
学了之后查看自己所指向的下一级课程，将下一级课程的入度都减一

*/
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const cnt: number[] = []
  const mp: number[][] = []
  const queue: number[] = []

  for (let i = 0; i < numCourses; i++) {
    mp[i] = []
    cnt[i] = 0
  }
  for (let arr of prerequisites) {
    const [a, b] = arr
    cnt[a]++
    mp[b].push(a)
  }
  for (let i = 0; i < numCourses; i++) {
    if (cnt[i] === 0) {
      queue.push(i)
    }
  }
  // console.log('mp', mp)
  let ncnt: number = 0
  while (queue.length) {
    // console.log('queue', queue)
    const t = queue.shift() as number
    ncnt++
    for (let num of mp[t]) {
      // console.log('num', num)

      cnt[num]--
      if (cnt[num] === 0) {
        queue.push(num)
      }
    }
  }
  return ncnt === numCourses
}

console.log(
  canFinish(20, [
    [0, 10],
    [3, 18],
    [5, 5],
    [6, 11],
    [11, 14],
    [13, 1],
    [15, 1],
    [17, 4]
  ])
)
