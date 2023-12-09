import * as fs from 'fs'
import { solutionPart1 } from './solution'

test('day7_part1 example solution', () => {
  const input = fs.readFileSync('src/day7/example.txt', 'utf8')
  const result = solutionPart1(input)
  expect(result).toBe(6440)
})

test('day7_part1 puzzle solution', () => {
  const input = fs.readFileSync('src/day7/puzzle.txt', 'utf8')
  const result = solutionPart1(input)
  expect(result).toBe(251121738)
})
