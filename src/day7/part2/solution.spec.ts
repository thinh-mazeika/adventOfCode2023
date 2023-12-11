import * as fs from 'fs'
import { solutionPart2 } from './solution'

test('day7_part2 example solution', () => {
  const input = fs.readFileSync('src/day7/example.txt', 'utf8')
  const result = solutionPart2(input)
  expect(result).toBe(5905)
})

test('day7_part2 puzzle solution', () => {
  const input = fs.readFileSync('src/day7/puzzle.txt', 'utf8')
  const result = solutionPart2(input)
  expect(result).toBe(251421071)
})
