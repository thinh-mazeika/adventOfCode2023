interface RoundObject {
  [color: string]: number
}

const allowedMaxCubesMap: Record<string, number> = {
  red: 12,
  green: 13,
  blue: 14,
}

const calculateSumGameID = (dataArray: string[]): number => {
  const transformedArray = dataArray.map((gameString: string) => {
    const [cubeID, roundsString] = gameString.split(':')
    const rounds: Record<string, RoundObject> = {}

    roundsString.split(';').forEach((round, index) => {
      const items = round
        .trim()
        .split(',')
        .map((item) => item.trim().split(' '))
      const roundObject: RoundObject = {}

      items.forEach(([quantity, color]) => {
        roundObject[color] = parseInt(quantity)
      })

      rounds[`round${index + 1}`] = roundObject
    })

    return {
      cubeID: cubeID.replace('Game', '').trim(),
      rounds,
    }
  })

  const filteredArray = transformedArray.filter((game) => {
    const rounds = Object.values(game.rounds)

    const hasRoundWithMaxCubes = rounds.some((round) => {
      const roundColors = Object.keys(round)
      return roundColors.some((color) => {
        return round[color] > allowedMaxCubesMap[color]
      })
    })

    return !hasRoundWithMaxCubes
  })

  const sum = filteredArray.reduce((acc, game) => {
    return acc + parseInt(game.cubeID)
  }, 0)

  return sum
}

export default calculateSumGameID
