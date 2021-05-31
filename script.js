const output = document.getElementById('output')
const button = document.getElementsByTagName('button')[0]

button.addEventListener('click', () => {
  const binaryString = document.getElementById('input').value

  const notBinaries = binaryString
    .split('')
    .filter((char) => char !== '0' && char !== '1')

  if (notBinaries.length || binaryString === '') {
    return alert('Please enter binary digits')
  }

  const decimal = parseInt(binaryString, 2).toString(10)

  output.value = decimal
})
