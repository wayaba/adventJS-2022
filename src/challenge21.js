//https://adventjs.dev/es/challenges/2022/21

function printTable(gifts) {
  let giftColLength = 'Gift'.length
  let qtyColLength = 'Quantity'.length

  const nameCol = Math.max(...gifts.map((el) => el.name.length))
  const quantityCol = Math.max(
    ...gifts.map((el) => el.quantity.toString().length)
  )

  giftColLength = nameCol > giftColLength ? nameCol : giftColLength
  qtyColLength = quantityCol > qtyColLength ? quantityCol : qtyColLength

  const header = '+'.repeat(giftColLength + qtyColLength + 7)
  const titleHeader =
    '| Gift '.padEnd(giftColLength + 3, ' ') +
    '| Quantity '.padEnd(qtyColLength + 3, ' ') +
    '|'
  const titleSubHeader =
    '| ' + '-'.repeat(giftColLength) + ' | ' + '-'.repeat(qtyColLength) + ' |'
  const footer = '*'.repeat(giftColLength + qtyColLength + 7)

  let body = ''
  gifts.forEach((gift) => {
    body +=
      '| ' +
      gift.name.padEnd(giftColLength, ' ') +
      ' | ' +
      gift.quantity.toString().padEnd(qtyColLength, ' ') +
      ' |\n'
  })

  const output =
    header + '\n' + titleHeader + '\n' + titleSubHeader + '\n' + body + footer
  return output
}

console.log(
  printTable([
    { name: 'Game', quantity: 2 },
    { name: 'Bike', quantity: 1 },
    { name: 'Book', quantity: 3 }
  ])
)

console.log(
  printTable([
    { name: 'PlayStation 5', quantity: 9234782374892 },
    { name: 'Book Learn Web Dev', quantity: 23531 }
  ])
)
