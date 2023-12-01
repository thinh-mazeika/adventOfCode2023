// const data = fs.readFileSync('src/example.txt', 'utf8')

const isNumber = (value: string) => {
  return Number.isInteger(parseInt(value))
}

const solution = (input: string) => {
  const dataArray = input.split('\n')
  const characters = dataArray.map((row) => row.split(''))
  // loop through each row and get the first digit and the last digit then merge first and last digit into a string and convert to number
  // skip element which is a letter
  const firstAndLast = characters.map((row) => {
    const first = row.find((element) => isNumber(element))
    const last = row.reverse().find((element) => isNumber(element))
    const firstAndLastString = '' + first + last
    return Number(firstAndLastString)
  })
  // calculate the grand sum of the array in which each element is a number
  return firstAndLast.reduce((a, b) => a + b, 0)
}

// console.log(solution(data))

export default solution
