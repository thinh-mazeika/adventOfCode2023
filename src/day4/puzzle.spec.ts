import * as fs from 'fs'
import calculateWinningPoints from './solution'

test('day4_part1 puzzle solution will be 21821', () => {
  const inputFile = fs.readFileSync('src/day4/puzzle.txt', 'utf8')
  const result = calculateWinningPoints(inputFile.split('\n'))
  expect(result).toBe(21821)
})
