//https://adventjs.dev/es/challenges/2022/19

function sortToys(toys, positions) {
  const list = toys
    .map((toy, index) => {
      return {
        toy: toy,
        order: positions[index],
      }
    })
    .sort((a, b) => a.order - b.order)
  return list.map((toy) => toy.toy)
}

const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [2, 3, 1, 0]

sortToys(toys, positions)
// ['puzzle', 'car', 'ball', 'doll']

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
const morePositions = [8, 6, 5, 7, 9]

sortToys(moreToys, morePositions)
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']
