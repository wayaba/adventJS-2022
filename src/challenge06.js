//https://adventjs.dev/es/challenges/2022/6

const cube = createCube(3)
console.log(cube)
/*
  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/
*/

const cubeOfOne = createCube(1)
console.log(cubeOfOne)
/*
/\_\
\/_/
*/

const cubeOfTwo = createCube(2)
console.log(cubeOfTwo)
/*
 /\_\_\
/\/\_\_\
\/\/_/_/
 \/_/_/
*/
function createCube(size) {
  let topFace = []
  let bottomFace = []

  const blancSpace = ' '
  for (let i = 0; i < size; i++) {
    topFace.push(
      `${blancSpace.repeat(size - i - 1)}${'/\\'.repeat(i + 1)}${'_\\'.repeat(
        size
      )}`
    )
    bottomFace.push(
      `${blancSpace.repeat(i)}${'\\/'.repeat(size - i)}${'_/'.repeat(size)}`
    )
  }

  return [topFace, bottomFace].flat().join('\n')
}
