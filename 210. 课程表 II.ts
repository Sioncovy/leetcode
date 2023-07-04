function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const cnt: number[] = []
  const mp: number[][] = []
  const queue: number[] = []
  const ansArr: number[] = []
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
    ansArr.push(t)
    ncnt++
    for (let num of mp[t]) {
      // console.log('num', num)

      cnt[num]--
      if (cnt[num] === 0) {
        queue.push(num)
      }
    }
  }
  return ncnt === numCourses ? ansArr : []
}

console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2]
  ])
)
