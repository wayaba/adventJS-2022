//https://adventjs.dev/es/challenges/2022/5

const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

console.log(getMaxGifts(giftsCities, maxGifts, maxCities)) // 20
console.log(getMaxGifts([50, 70, 30], 100, 2)) // 100

console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3)) // 20
console.log(getMaxGifts([50], 15, 1)) // 0
console.log(getMaxGifts([50], 100, 1)) // 50
console.log(getMaxGifts([50, 70], 100, 1)) // 70
console.log(getMaxGifts([50, 70, 30], 100, 2)) // 100
console.log(getMaxGifts([50, 70, 30], 100, 3)) // 100
console.log(getMaxGifts([50, 70, 30], 100, 4)) // 100

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  return Math.max(
    ...giftsCities
      //genero todas las posibles combinatorias
      .reduce((a, v) => a.concat(a.map((d) => [v].concat(d))), [[]])
      //me quedo solo con las que tienen como mucho la cantidad maxima de ciudades a visitar
      .filter((x) => x.length <= maxCities)
      //sumarizo cada combinatoria
      .map((a) => a.reduce((x, y) => x + y, 0))
      //me quedo solo con las que tienen como maximo la cantidad de regalos a llevar
      .filter((x) => x <= maxGifts)
  )
}
