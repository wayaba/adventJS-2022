//https://adventjs.dev/es/challenges/2022/22

function checkStepNumbers(systemNames, stepNumbers) {
  const namesAppearences = {}

  systemNames.forEach((name, index) => {
    if (namesAppearences[name]) {
      namesAppearences[name].push(index)
    } else {
      namesAppearences[name] = [index]
    }
  })

  return Object.values(namesAppearences).every((possitionArray) => {
    let lastStepNumber = 0
    for (const index of possitionArray) {
      if (lastStepNumber >= stepNumbers[index]) return false
      lastStepNumber = stepNumbers[index]
    }
    return true
  })
}

const systemNames = ['tree_1', 'tree_2', 'house', 'tree_1', 'tree_2', 'house']
const stepNumbers = [1, 33, 10, 2, 44, 20]

console.log(checkStepNumbers(systemNames, stepNumbers)) //true

console.log(checkStepNumbers(['tree_1', 'tree_1', 'house'], [2, 1, 10])) //false
