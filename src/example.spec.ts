import * as fs from 'fs'
import solution from './example'

test('example solution will be 142', () => {
  const inputFile = fs.readFileSync('src/example.txt', 'utf8')
  const result = solution(inputFile)
  expect(result).toBe(142)
})

test('day1-part1 solution will be 54927', () => {
  const inputFile = fs.readFileSync('src/day1-part1.txt', 'utf8')
  const result = solution(inputFile)
  expect(result).toBe(54927)
})
