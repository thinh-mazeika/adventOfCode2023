const multiply = (a: number, b: number) => a * b

type TimeAndDistanceRecord = {
  timeRecord: number
  distanceRecord: number
  possibleWinningWays: number
}

function buildRecordObject(inputFile: string[]) {
  const timeAndDistanceRecords: TimeAndDistanceRecord[] = []
  const timeRecords = inputFile[0]
    .split(':')[1]
    .split(' ')
    .filter((time) => time !== '')
  const distanceRecords = inputFile[1]
    .split(':')[1]
    .split(' ')
    .filter((distance) => distance !== '')

  for (let i = 0; i < timeRecords.length; i++) {
    timeAndDistanceRecords.push({
      timeRecord: +timeRecords[i],
      distanceRecord: +distanceRecords[i],
      possibleWinningWays: 0,
    })
  }
  return timeAndDistanceRecords
}

function calculatePossibleWinningWays(inputFile: string[]) {
  const timeAndDistanceRecords = buildRecordObject(inputFile)

  Object.values(timeAndDistanceRecords).forEach((record) => {
    const { timeRecord, distanceRecord } = record

    for (let i = 1; i <= timeRecord - 1; i++) {
      if ((timeRecord - i) * i > distanceRecord) {
        record.possibleWinningWays += 1
      }
    }
  })

  return timeAndDistanceRecords.map((record) => record.possibleWinningWays).reduce(multiply)
}

export default calculatePossibleWinningWays
