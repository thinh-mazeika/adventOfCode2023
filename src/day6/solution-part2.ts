import * as fs from 'fs'

const inputFile = fs.readFileSync('src/day6/puzzle.txt', 'utf8').split('\n')
const timeRecords = inputFile[0].split(':')[1].trim().split(' ').join('')
console.log(timeRecords, typeof timeRecords, timeRecords.length)
// swap the last digit of timeRecords with the digit next to the last digit

const timeRecordsArray = timeRecords.split('')
const lastDigit = timeRecordsArray[timeRecordsArray.length - 1]
const secondLastDigit = timeRecordsArray[timeRecordsArray.length - 2]
timeRecordsArray[timeRecordsArray.length - 1] = secondLastDigit
timeRecordsArray[timeRecordsArray.length - 2] = lastDigit
console.log(timeRecordsArray.join(''))
