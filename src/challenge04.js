//https://adventjs.dev/es/challenges/2022/4

function fitsInOneBox(boxes) {
  const sorted = boxes.sort((a, b) => a.w - b.w && a.l - b.l && a.h - b.h)
  return sorted.every((item, index) => {
    const nextIndex = index + 1
    if (sorted[nextIndex] === undefined) return true
    return (
      item.l < sorted[nextIndex].l &&
      item.w < sorted[nextIndex].w &&
      item.h < sorted[nextIndex].h
    )
  })
}

console.log(
  fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
  ])
) // true

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 },
]

console.log(fitsInOneBox(boxes)) // false

const boxes2 = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
]

console.log(fitsInOneBox(boxes2)) // true
