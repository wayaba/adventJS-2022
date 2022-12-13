//https://adventjs.dev/es/challenges/2022/10

function checkJump(heights) {
  const maxIndex = heights.indexOf(Math.max(...heights))
  if (maxIndex === 0 || maxIndex === heights.length - 1) return false
  return heights.every((item, index) => {
    let prevValue = heights[index - 1] === undefined ? 0 : heights[index - 1]
    return index <= maxIndex ? item >= prevValue : item <= prevValue
  })
}

const heights = [1, 3, 8, 5, 2]
//checkJump(heights) // true

/*
Es `true`.
El salto va de abajo a arriba y luego de arriba a abajo:

    8 (punto más alto)
   ↗ ↘
  3   5
 ↗     ↘
1       2
*/

const heights2 = [1, 7, 3, 5]
//checkJump(heights2) // false

/*
Es `false`.
Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

  7   5 
 ↗ ↘ ↗
1   3
*/

checkJump([2, 2, 2, 2]) // false

checkJump([1, 2, 2, 2, 1]) //true

checkJump([1, 2, 3]) //false
