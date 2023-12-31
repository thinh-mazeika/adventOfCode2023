interface RoundObject {
  [color: string]: number
}

const getValidGames = (dataArray: string[]) => {
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

    const maxValues = Object.values(rounds).reduce((acc, round) => {
      Object.entries(round).forEach(([color, value]) => {
        acc[color] = Math.max(acc[color] || 0, value || 0)
      })
      return acc
    }, {})

    const result = maxValues.red * maxValues.green * maxValues.blue

    return {
      ID: ID.replace('Game', '').trim(),
      rounds,
      result,
    }
  })
}

const calculatePowerSum = (dataArray: string[]): number => {
  const validGames = getValidGames(dataArray)

  const sum = validGames.reduce((acc, game) => {
    return acc + game.result
  }, 0)

  return sum
}

export default calculatePowerSum
