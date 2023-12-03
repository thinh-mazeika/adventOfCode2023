import * as fs from 'fs'
import calculateSumGameID from './solution'
import calculatePowerSum from './solution-part2'

test('day2_part1 puzzle solution will be 2237', () => {
  const inputFile = fs.readFileSync('src/day2/puzzle.txt', 'utf8')
  const result = calculateSumGameID(inputFile.trim().split('\n'))
  expect(result).toBe(2237)
})

test('day2_part2 puzzle solution will be 66681', () => {
  const inputFile = fs.readFileSync('src/day2/puzzle.txt', 'utf8')
  const result = calculatePowerSum(inputFile.trim().split('\n'))
  expect(result).toBe(66681)
})
