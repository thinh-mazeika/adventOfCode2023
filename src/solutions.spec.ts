import * as fs from 'fs'
import calculateSumPart1 from './day1-part1'
import calculateSum from './day1-part2'

test('example part1 solution will be 142', () => {
  const inputFile = fs.readFileSync('src/example.txt', 'utf8')
  const result = calculateSumPart1(inputFile.split('\n'))
  expect(result).toBe(142)
})

test('example part2 solution will be 281', () => {
  const inputFile = fs.readFileSync('src/example-part2.txt', 'utf8')
  const result = calculateSum(inputFile.split('\n'))
  expect(result).toBe(281)
})

test('day1-part1 solution will be 54927', () => {
  const inputFile = fs.readFileSync('src/day1-part1.txt', 'utf8')
  const result = calculateSumPart1(inputFile.split('\n'))
  expect(result).toBe(54927)
})

test('day1-part2 solution will be 54581', () => {
  const inputFile = fs.readFileSync('src/day1-part1.txt', 'utf8')
  const result = calculateSum(inputFile.split('\n'))
  expect(result).toBe(54581)
})
