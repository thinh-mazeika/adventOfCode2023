function intersect(a: string[], b: string[]) {
  let t
  if (b.length > a.length) (t = b), (b = a), (a = t) // indexOf to loop over shorter
  return a.filter(function (e) {
    return b.indexOf(e) > -1
  })
}

function calculateWinningPoints(cards: string[]): number {
  let totalWinningPoints = 0

  cards.forEach((card) => {
    const cardValues = card.split(':')[1].split('|')
    const winningCardArray = cardValues[0].trim().split(' ')
    const userCardArray = cardValues[1]
      .trim()
      .split(' ')
      .filter((card) => card !== '')
    const overlap = intersect(winningCardArray, userCardArray).length
    const winningPoints = overlap === 0 ? 0 : Math.pow(2, overlap - 1)
    totalWinningPoints += winningPoints
  })
  return totalWinningPoints
}

export default calculateWinningPoints
