//https://adventjs.dev/es/challenges/2022/7

function getGiftsToRefill(a1, a2, a3) {
  const joinAll = [...new Set(a1), ...new Set(a2), ...new Set(a3)]
  const duplicatedGifts = joinAll.filter((x, i, a) => a.indexOf(x) !== i)
  return joinAll
    .filter((item) => !duplicatedGifts.includes(item))
    .map((item) => item)
}

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/

const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']
console.log(gifts)
