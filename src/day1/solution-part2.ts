const isNumber = (value: string) => {
  return Number.isInteger(parseInt(value))
}

const findFirstDigit = (value: string): string => {
  if (isNumber(value[0])) {
    return value[0]
  }
  if (value.startsWith('one')) return '1'
  if (value.startsWith('two')) return '2'
  if (value.startsWith('three')) return '3'
  if (value.startsWith('four')) return '4'
  if (value.startsWith('five')) return '5'
  if (value.startsWith('six')) return '6'
  if (value.startsWith('seven')) return '7'
  if (value.startsWith('eight')) return '8'
  if (value.startsWith('nine')) return '9'

  return findFirstDigit(value.slice(1))
}

const findLastDigit = (value: string): string => {
  if (isNumber(value[value.length - 1])) {
    return value[value.length - 1]
  }
  if (value.endsWith('one')) return '1'
  if (value.endsWith('two')) return '2'
  if (value.endsWith('three')) return '3'
  if (value.endsWith('four')) return '4'
  if (value.endsWith('five')) return '5'
  if (value.endsWith('six')) return '6'
  if (value.endsWith('seven')) return '7'
  if (value.endsWith('eight')) return '8'
  if (value.endsWith('nine')) return '9'

  return findLastDigit(value.slice(0, -1))
}

const calculateSum = (dataArray: string[]): number => {
  return dataArray
    .map((value: string) => {
      const first = findFirstDigit(value)
      const last = findLastDigit(value)
      const firstAndLastString = '' + first + last
      return Number(firstAndLastString)
    })
    .reduce((a, b) => a + b, 0)
}
export default calculateSum
