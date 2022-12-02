//https://adventjs.dev/es/challenges/2022/1

function wrapping(gifts) {
  return gifts.map(gift=>{
    const length = gift.length
    const fill = '*'.repeat(length +2)
    return  `${fill}\n*${gift}*\n${fill}`
  })
}


const gifts = ['book', 'game', 'socks']
const wrapped = wrapping(gifts)
wrapped.forEach(gift=> console.log(gift))
//console.log(wrapped)
/* [
     "******\n*book*\n******",
     "******\n*game*\n******",
     "*******\n*socks*\n*******"
   ] */