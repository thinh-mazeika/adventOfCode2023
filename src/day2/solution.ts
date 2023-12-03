interface RoundObject {
  [color: string]: number
}

interface GameObject {
  ID: string
  rounds: Record<string, RoundObject>
}

const allowedMaxCubesMap: Record<string, number> = {
  red: 12,
  green: 13,
  blue: 14,
} as const

const getGames = (dataArray: string[]) => {
  return dataArray.map((gameString: string) => {
    const [ID, roundsString] = gameString.split(':')
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
      ID: ID.replace('Game', '').trim(),
      rounds,
    }
  })
}

const getValidGames = (gamesObject: GameObject[]) => {
  return gamesObject.filter((game: GameObject) => {
    const rounds = Object.values(game.rounds)

    const hasRoundWithMaxCubes = rounds.some((round) => {
      const roundColors = Object.keys(round)
      return roundColors.some((color) => {
        return round[color] > allowedMaxCubesMap[color]
      })
    })

    return !hasRoundWithMaxCubes
  })
}

const calculateSumGameID = (dataArray: string[]): number => {
  const gamesObject = getGames(dataArray)

  const validGames = getValidGames(gamesObject)

  const sum = validGames.reduce((acc, game) => {
    return acc + parseInt(game.ID)
  }, 0)

  return sum
}

export default calculateSumGameID
