import * as fs from 'fs'

const data = fs.readFileSync('src/example.txt', 'utf8')

const solution = (input: string) => {
  const dataArray = input.split('\n')
  const eachRow = dataArray.map((row) => row.split(''))

  const isNumber = (value: string) => {
    return Number.isInteger(parseInt(value))
  }

  // loop through each row and get the first digit and the last digit then merge first and last digit into a string and convert to number
  // first digit and last digit can be next to each other
  // the order will be from left to right
  // skip element which is a letter
  const firstAndLast = eachRow.map((row) => {
    const first = row.find((element) => isNumber(element))
    const last = row.reverse().find((element) => isNumber(element))
    const firstAndLastString = '' + first + last
    return Number(firstAndLastString)
  })
  // calculate the grand sum of the array in which each element is a number
  return firstAndLast.reduce((a, b) => a + b, 0)
}

console.log(solution(data))

export default solution
