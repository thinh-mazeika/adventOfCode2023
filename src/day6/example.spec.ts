import * as fs from 'fs'
import calculatePossibleWinningWays from './solution'

test('day6_part1 example solution will be 288', () => {
  const inputFile = fs.readFileSync('src/day6/example.txt', 'utf8')
  const data: string[] = inputFile.split('\n')
  const result = calculatePossibleWinningWays(data)
  expect(result).toBe(288)
})
