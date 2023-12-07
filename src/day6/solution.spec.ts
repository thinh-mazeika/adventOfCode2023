import * as fs from 'fs'
import calculatePossibleWinningWays from './solution'

test('day6_part1 puzzle solution will be 131376', () => {
  const inputFile = fs.readFileSync('src/day6/puzzle.txt', 'utf8')
  const data: string[] = inputFile.split('\n')
  const result = calculatePossibleWinningWays(data)
  expect(result).toBe(131376)
})
