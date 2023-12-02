import * as fs from 'fs'
import calculateSumPart1 from './day1-part1'
import calculateSum from './day1-part2'
import calculateSumGameID from './day2-part1'
import calculatePowerSum from './day2-part2'

test('day1_part1 example solution will be 142', () => {
  const inputFile = fs.readFileSync('src/example.txt', 'utf8')
  const result = calculateSumPart1(inputFile.split('\n'))
  expect(result).toBe(142)
})

test('day1_part2 example solution will be 281', () => {
  const inputFile = fs.readFileSync('src/example-part2.txt', 'utf8')
  const result = calculateSum(inputFile.split('\n'))
  expect(result).toBe(281)
})

test('day1_part1 puzzle solution will be 54927', () => {
  const inputFile = fs.readFileSync('src/day1-part1.txt', 'utf8')
  const result = calculateSumPart1(inputFile.split('\n'))
  expect(result).toBe(54927)
})

test('day1_part2 puzzle solution will be 54581', () => {
  const inputFile = fs.readFileSync('src/day1-part1.txt', 'utf8')
  const result = calculateSum(inputFile.split('\n'))
  expect(result).toBe(54581)
})

test('day2_part1 example solution will be 8', () => {
  const inputFile = fs.readFileSync('src/day2-example.txt', 'utf8')
  const result = calculateSumGameID(inputFile.trim().split('\n'))
  expect(result).toBe(8)
})

test('day2_part2 example solution will be 2286', () => {
  const inputFile = fs.readFileSync('src/day2-example.txt', 'utf8')
  const result = calculatePowerSum(inputFile.trim().split('\n'))
  expect(result).toBe(2286)
})

test('day2_part1 puzzle solution will be 2237', () => {
  const inputFile = fs.readFileSync('src/day2.txt', 'utf8')
  const result = calculateSumGameID(inputFile.trim().split('\n'))
  expect(result).toBe(2237)
})

test('day2_part2 puzzle solution will be 66681', () => {
  const inputFile = fs.readFileSync('src/day2.txt', 'utf8')
  const result = calculatePowerSum(inputFile.trim().split('\n'))
  expect(result).toBe(66681)
})
