//https://adventjs.dev/es/challenges/2022/8

function checkPart(part) {
  const stringAsArray = part.split('')
  if (part === stringAsArray.reverse().join('')) return true

  return stringAsArray.some((item, index) => {
    const newArr = stringAsArray.filter((w, i) => i !== index)
    return newArr.join('') === newArr.reverse().join('')
  })
}

console.log(checkPart('uwu')) // true
// "uwu" es un palíndromo sin eliminar ningún carácter

console.log(checkPart('miidim')) // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

console.log(checkPart('midu')) // false
// "midu" no puede ser un palíndromo después de eliminar un carácter
