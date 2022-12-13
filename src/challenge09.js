//https://adventjs.dev/es/challenges/2022/9

function countTime(leds) {
  const fillArray = (arr, count) => {
    if (!arr.includes(0)) return count
    let newArr = arr.map((item, index) => {
      let output = item
      if (index === 0 && arr[arr.length - 1] === 1) return 1
      if (item === 0) arr[index - 1] === 1 ? (output = 1) : null
      return output
    })
    count++
    return newArr.includes(0) ? fillArray(newArr, count) : count
  }
  return fillArray(leds, 0) * 7
}

const leds = [0, 1, 1, 0, 1]
countTime(leds) // 7
// 7 segundos ya que en el primer cambio
// todas las luces se encendieron
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

countTime([0, 0, 0, 1]) // 21
// 21 segundos ya que necesita tres cambios:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

countTime([0, 0, 1, 0, 0]) // 28
// 28 segundos ya que necesita cuatro cambios:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]
