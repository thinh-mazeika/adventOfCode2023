import * as fs from 'fs'
import calculateSumPart1 from './solution'
import calculateSum from './solution-part2'

test('day1_part1 example solution will be 142', () => {
  const inputFile = fs.readFileSync('src/day1/example.txt', 'utf8')
  const result = calculateSumPart1(inputFile.split('\n'))
  expect(result).toBe(142)
})

test('day1_part2 example solution will be 281', () => {
  const inputFile = fs.readFileSync('src/day1/example-part2.txt', 'utf8')
  const result = calculateSum(inputFile.split('\n'))
  expect(result).toBe(281)
})
