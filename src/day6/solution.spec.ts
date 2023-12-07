import * as fs from 'fs'
import calculatePossibleWinningWays from './solution'
import calculatePossibleWinningWaysPart2 from './solution-part2'

test('day6_part1 puzzle solution will be 131376', () => {
  const inputFile = fs.readFileSync('src/day6/puzzle.txt', 'utf8')
  const data: string[] = inputFile.split('\n')
  const result = calculatePossibleWinningWays(data)
  expect(result).toBe(131376)
})

test('day6_part2 puzzle solution will be 34123437', () => {
  const inputFile = fs.readFileSync('src/day6/puzzle.txt', 'utf8')
  const data: string[] = inputFile.split('\n')
  const result = calculatePossibleWinningWaysPart2(data)
  expect(result).toBe(34123437)
})
