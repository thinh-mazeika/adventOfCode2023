import * as fs from 'fs'
import calculateSumGameID from './solution'
import calculatePowerSum from './solution-part2'

test('day2_part1 example solution will be 8', () => {
  const inputFile = fs.readFileSync('src/day2/example.txt', 'utf8')
  const result = calculateSumGameID(inputFile.trim().split('\n'))
  expect(result).toBe(8)
})

test('day2_part2 example solution will be 2286', () => {
  const inputFile = fs.readFileSync('src/day2/example.txt', 'utf8')
  const result = calculatePowerSum(inputFile.trim().split('\n'))
  expect(result).toBe(2286)
})
