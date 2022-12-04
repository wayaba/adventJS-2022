//https://adventjs.dev/es/challenges/2022/3

function distributeGifts(packOfGifts, reindeers) {
  const giftWeight = packOfGifts.reduce((current,gift) =>{
    return current + gift.length
  },0)
  
  const canCarry = reindeers.reduce((current,reindeer) =>{
    return current + (reindeer.length * 2)
  },0)
  
  return Math.floor(canCarry / giftWeight)
}


const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2
