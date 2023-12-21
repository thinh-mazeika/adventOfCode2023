import * as fs from 'fs'
import { solutionPart2 } from './solution'

test('day5_part2 example solution', () => {
  const input = fs.readFileSync('src/day5/example.txt', 'utf8')
  const result = solutionPart2(input)
  expect(result).toBe(46)
})

test('day5_part2 puzzle solution', () => {
  const input = fs.readFileSync('src/day5/puzzle.txt', 'utf8')
  const result = solutionPart2(input)
  expect(result).toBe(37384986)
})
