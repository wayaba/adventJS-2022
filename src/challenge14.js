//https://adventjs.dev/es/challenges/2022/14

function getOptimalPath(path) {
  const optimal = path.reduceRight((prev, curr) => {
    return curr.map((val, index) => {
      return val + Math.min(prev[index], prev[index + 1])
    })
  })

  return optimal[0]
}

getOptimalPath([[0], [2, 3]]) // 2
// 0 -> 2

getOptimalPath([[0], [3, 4], [9, 8, 1]]) // 5
// 0 -> 4 -> 1

getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]) // 8
// 1 -> 1 -> 5 -> 1
