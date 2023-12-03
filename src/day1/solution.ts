const isNumber = (value: string) => {
  return Number.isInteger(parseInt(value))
}

const findFirstDigit = (value: string) => {
  for (let i = 0; i < value.length; i++) {
    if (isNumber(value[i])) {
      return value[i]
    }
  }
}

const findLastDigit = (value: string) => {
  for (let i = value.length - 1; i >= 0; i--) {
    if (isNumber(value[i])) {
      return value[i]
    }
  }
}

const calculateSumPart1 = (dataArray: string[]): number => {
  return dataArray
    .map((value: string) => {
      const first = findFirstDigit(value)
      const last = findLastDigit(value)
      const firstAndLastString = '' + first + last
      return Number(firstAndLastString)
    })
    .reduce((a, b) => a + b, 0)
}

export default calculateSumPart1
