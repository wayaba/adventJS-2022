//https://adventjs.dev/es/challenges/2022/17

function carryGifts(gifts, maxWeight) {
  if (gifts.every((gift) => gift.length > maxWeight)) return []
  let bags = ['']
  gifts.forEach((gift) => {
    const prevWeight = bags.at(-1).split(' ').join('').length
    const prevIndex = bags.length - 1
    if (prevWeight + gift.length <= maxWeight) {
      bags[prevIndex] += ' ' + gift
      bags[prevIndex] = bags[prevIndex].trim()
      return
    }
    bags.push(gift)
  })
  return bags
}

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 10))
// ['game bike', 'book toy']
// en cada saco se puede llevar 10kg
// el primer saco lleva 'game' y 'bike' que pesan 4kg y 4kg
// el segundo saco lleva 'book' y ' toy' que pesan 4kg y 3kg

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 7))
// ['game', 'bike', 'book toy']
// en cada saco se puede llevar 7kg
// el primer saco sólo puede llevar 'game' que pesa 4kg
// el segundo saco sólo puede llevar 'bike' que pesa 4kg
// el tercer saco lleva 'book' y 'toy' que pesan 4kg y 3kg

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 4))
// ['game', 'bike', 'book', 'toy']
// en cada saco se puede llevar 4kg
// cada saco sólo puede llevar un regalo

console.log(carryGifts(['toy', 'gamme', 'toy', 'bike'], 6))
// ['toy', 'gamme', 'toy', 'bike']
// en cada saco se puede llevar 6kg
// cada saco sólo puede llevar un regalo
// fíjate que no se puede llevar 'toy toy' en un saco
// porque no está uno al lado del otro
