import * as fs from 'fs'
import getTotalPartNumbers from './solution'

test('day3_part1 example solution will be 4361', () => {
  const inputFile = fs.readFileSync('src/day3/example.txt', 'utf8')
  const grid: string[][] = inputFile.split('\n').map((line) => line.split(''))
  const result = getTotalPartNumbers(grid)
  expect(result).toBe(4361)
})
