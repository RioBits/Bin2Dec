const output = document.getElementById('output')
const button = document.getElementsByTagName('button')[0]

button.addEventListener('click', () => {
  const binaryString = document.getElementById('input').value

  if (binaryString.length > 8) {
    output.value = 'up to 8 binary digits'
    return
  }

  const notBinaries = binaryString
    .split('')
    .filter((char) => char !== '0' && char !== '1')

  if (notBinaries.length) {
    output.value = 'Enter binary'
    return
  }

  const decimal = parseInt(binaryString, 2).toString(10)

  output.value = decimal
})
