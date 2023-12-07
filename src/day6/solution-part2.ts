type TimeAndDistanceRecord = {
  timeRecord: number
  distanceRecord: number
  possibleWinningWays: number
}

function buildRecordObject(inputFile: string[]): TimeAndDistanceRecord[] {
  const timeRecords = inputFile[0].split(':')[1].trim().split(' ').join('')
  const distanceRecords = inputFile[1].split(':')[1].trim().split(' ').join('')

  return [
    {
      timeRecord: +timeRecords,
      distanceRecord: +distanceRecords,
      possibleWinningWays: 0,
    },
  ]
}

function calculatePossibleWinningWaysPart2(inputFile: string[]) {
  const timeAndDistanceRecords = buildRecordObject(inputFile)

  Object.values(timeAndDistanceRecords).forEach((record) => {
    const { timeRecord, distanceRecord } = record

    for (let i = 1; i <= timeRecord - 1; i++) {
      if ((timeRecord - i) * i > distanceRecord) {
        record.possibleWinningWays += 1
      }
    }
  })

  // sum of all possible winning ways
  return timeAndDistanceRecords.map((record) => record.possibleWinningWays).reduce((a, b) => a + b)
}

export default calculatePossibleWinningWaysPart2
