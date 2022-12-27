//https://adventjs.dev/es/challenges/2022/16

function fixLetter(letter) {
  return letter
    .trim()
    .replace(/,\s{0,1}/g, ', ') // Separate commas from words adding a space after the comma
    .replace(/\s+/g, ' ') // Remove extra spaces
    .replace(/\s{1}([,.\?\!])/g, '$1') // Remove spaces before punctuation
    .replace(/([a-z])$/gi, '$1.') // Add a period at the end of the sentence
    .replace(/\?+/g, '?') // Remove extra question marks
    .replace(/santa claus/gi, 'Santa Claus') // Capitalize Santa Claus
    .replace(/[\?\!.]+\s[a-z]|^[a-z]/gi, (c) => c.toUpperCase()) // Capitalize the first letter of the sentence and after a punctuation
}

fixLetter('  hi,santa claus. are you there ?   ')
// Hi, Santa Claus. Are you there?

fixLetter(
  ` hello,  how are you??????     do you know if santa claus exists?  i really hope he does!  bye  `
)
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

fixLetter(
  "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"
)
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?
