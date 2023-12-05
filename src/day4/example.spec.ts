import * as fs from 'fs'
import calculateWinningPoints from './solution'

test('day4_part1 example solution will be 13', () => {
  const inputFile = fs.readFileSync('src/day4/example.txt', 'utf8')
  const result = calculateWinningPoints(inputFile.split('\n'))
  expect(result).toBe(13)
})
