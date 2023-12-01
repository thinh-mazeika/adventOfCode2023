import * as fs from 'fs'
import solution from './example'

const data = fs.readFileSync('src/day1-part1.txt', 'utf8')

console.log(solution(data))
