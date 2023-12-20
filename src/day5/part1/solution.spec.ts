import * as fs from 'fs'
import { solutionPart1 } from './solution'

test('day5_part1 example solution', () => {
  const input = fs.readFileSync('src/day5/example.txt', 'utf8')
  const result = solutionPart1(input)
  expect(result).toBe(35)
})

test('day5_part1 puzzle solution', () => {
  const input = fs.readFileSync('src/day5/puzzle.txt', 'utf8')
  const result = solutionPart1(input)
  expect(result).toBe(318728750)
})
