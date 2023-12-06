function intersect(a: string[], b: string[]) {
  let t
  if (b.length > a.length) (t = b), (b = a), (a = t) // indexOf to loop over shorter
  return a.filter(function (e) {
    return b.indexOf(e) > -1
  })
}

function createCardCounts(cards: string[]) {
  const cardCounts: { [key: string]: number } = {}

  cards.forEach((card) => {
    const [cardDetails] = card.split(': ')
    const cardNumber = cardDetails.split('Card')[1].trim()
    if (!cardCounts[cardNumber]) {
      cardCounts[cardNumber] = 0
    }
    cardCounts[cardNumber]++
  })

  return cardCounts
}

function calculateTotalInstances(cards: string[]): number {
  const cardCounts = createCardCounts(cards)

  for (const card of cards) {
    const [cardDetails] = card.split(': ')
    const cardNumber = cardDetails.split('Card')[1].trim()
    const cardValues = card.split(':')[1].split('|')
    const winningCardArray = cardValues[0].trim().split(' ')
    const userCardArray = cardValues[1]
      .trim()
      .split(' ')
      .filter((card) => card !== '')
    const overlap = intersect(winningCardArray, userCardArray).length

    for (let j = 1; j <= overlap; j++) {
      const idx = Number(cardNumber) + j

      if (!cardCounts[idx]) {
        cardCounts[idx] = 0
      }
      cardCounts[idx] += cardCounts[cardNumber]
    }
  }
  return Object.values(cardCounts).reduce((acc, val) => acc + val, 0)
}

export default calculateTotalInstances
