import * as fs from 'fs'
import calculateWinningPoints from './solution'
import calculateTotalInstances from './solution-part2'

test('day4_part1 puzzle solution will be 21821', () => {
  const inputFile = fs.readFileSync('src/day4/puzzle.txt', 'utf8')
  const result = calculateWinningPoints(inputFile.split('\n'))
  expect(result).toBe(21821)
})

test('day4_part2 puzzle solution will be 5539496', () => {
  const inputFile = fs.readFileSync('src/day4/puzzle.txt', 'utf8')
  const result = calculateTotalInstances(inputFile.split('\n'))
  expect(result).toBe(5539496)
})
