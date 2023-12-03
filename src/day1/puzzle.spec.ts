import * as fs from 'fs'
import calculateSumPart1 from './solution'
import calculateSum from './solution-part2'

test('day1_part1 puzzle solution will be 54927', () => {
  const inputFile = fs.readFileSync('src/day1/puzzle.txt', 'utf8')
  const result = calculateSumPart1(inputFile.split('\n'))
  expect(result).toBe(54927)
})

test('day1_part2 puzzle solution will be 54581', () => {
  const inputFile = fs.readFileSync('src/day1/puzzle.txt', 'utf8')
  const result = calculateSum(inputFile.split('\n'))
  expect(result).toBe(54581)
})
