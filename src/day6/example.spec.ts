import * as fs from 'fs'
import calculatePossibleWinningWays from './solution'
import calculatePossibleWinningWaysPart2 from './solution-part2'

test('day6_part1 example solution will be 288', () => {
  const inputFile = fs.readFileSync('src/day6/example.txt', 'utf8')
  const data: string[] = inputFile.split('\n')
  const result = calculatePossibleWinningWays(data)
  expect(result).toBe(288)
})

test('day6_part2 example solution will be 71503', () => {
  const inputFile = fs.readFileSync('src/day6/example.txt', 'utf8')
  const data: string[] = inputFile.split('\n')
  const result = calculatePossibleWinningWaysPart2(data)
  expect(result).toBe(71503)
})
