//https://adventjs.dev/es/challenges/2022/20

function howManyReindeers(reindeerTypes, gifts) {
  const resp = gifts.map((gift) => {
    let remainWeight = gift.weight
    const possibleReindeers = reindeerTypes
      .filter((o) => o.weightCapacity <= remainWeight)
      .sort((a, b) => a.weightCapacity - b.weightCapacity)

    const calcReindeers = (possibleReindeers, remainWeight, reindeers = {}) => {
      possibleReindeers.forEach((reindeer) => {
        if (remainWeight >= reindeer.weightCapacity) {
          if (reindeers[reindeer.type]) reindeers[reindeer.type] += 1
          else reindeers[reindeer.type] = 1

          remainWeight = remainWeight - reindeer.weightCapacity
        }
      })
      if (remainWeight > 0)
        calcReindeers(possibleReindeers, remainWeight, reindeers)

      return reindeers
    }
    const reindeers = calcReindeers(possibleReindeers, remainWeight)
    let output = []
    for (const [key, value] of Object.entries(reindeers)) {
      output.push({ type: key, num: value })
    }
    return {
      country: gift.country,
      reindeers: output.reverse()
    }
  })
  return resp
}

const reindeerTypes = [
  { type: 'Nuclear', weightCapacity: 50 },
  { type: 'Electric', weightCapacity: 10 },
  { type: 'Gasoline', weightCapacity: 5 },
  { type: 'Diesel', weightCapacity: 1 }
]

const gifts = [
  { country: 'Spain', weight: 30 },
  { country: 'France', weight: 17 },
  { country: 'Italy', weight: 50 }
]

console.log(howManyReindeers(reindeerTypes, gifts))
