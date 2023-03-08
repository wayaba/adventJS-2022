//https://adventjs.dev/es/challenges/2022/18

function dryNumber(dry, numbers) {
  const dryString = dry.toString()
  const numberList = Array.from(Array(numbers).keys()).slice(1)
  numberList.push(numbers)

  return numberList
    .filter((number) => number >= dry)
    .filter((number) => number.toString().includes(dryString))
}

dryNumber(1, 15) // [1, 10, 11, 12, 13, 14, 15]

// no tenemos tinta para el dígito 1
// tenemos que imprimir 15 códigos de barras del 1 al 15
// los códigos de barras que saldrán mal por falta de tinta son:
// 1, 10, 11, 12, 13, 14, 15

dryNumber(2, 20) // [2, 12, 20]

// no tenemos tinta para el dígito 2
// tenemos que imprimir 20 códigos de barras del 1 al 20
// los códigos de barras que saldrán mal por falta de tinta son:
// 2, 12, 20
