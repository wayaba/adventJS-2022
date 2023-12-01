//https://adventjs.dev/es/challenges/2022/22

function checkStepNumbers(systemNames, stepNumbers) {
  const namesAppearences = systemNames.reduce((acc, name, index) => {
    acc[name] ? acc[name].push(index) : (acc[name] = [index])
    return acc
  }, {})

  return Object.values(namesAppearences).every((possitionArray) => {
    return possitionArray.reduce((acc, currentIndex, index, array) => {
      if (stepNumbers[array[index + 1]])
        return acc && stepNumbers[currentIndex] < stepNumbers[array[index + 1]]
      return acc
    }, true)
  })
}

const systemNames = ['tree_1', 'tree_2', 'house', 'tree_1', 'tree_2', 'house']
const stepNumbers = [1, 33, 10, 2, 44, 20]

console.log(checkStepNumbers(systemNames, stepNumbers)) //true

console.log(checkStepNumbers(['tree_1', 'tree_1', 'house'], [2, 1, 10])) //false
