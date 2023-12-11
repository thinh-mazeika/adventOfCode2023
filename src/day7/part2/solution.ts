export function solutionPart2(input: string): number {
  return input
    .split('\n')
    .map(getHand)
    .sort(compareHand)
    .map((hand, index) => hand.bid * (index + 1))
    .reduce((prev, curr) => prev + curr, 0)
}

function compareHand(a: Hand, b: Hand): number {
  const sortingValue = handTypeValueMap[a.type] - handTypeValueMap[b.type]

  if (sortingValue !== 0) {
    return sortingValue
  }

  for (let i = 0; i < 5; i++) {
    const cardAValue = cardValueMap[a.cards[i]]
    const cardBValue = cardValueMap[b.cards[i]]

    if (cardAValue !== cardBValue) {
      return cardAValue - cardBValue
    }
  }

  return 0
}

function getHand(line: string): Hand {
  const lineParts = line.split(' ')
  const cards = lineParts[0]
  const bid = Number(lineParts[1])
  return {
    bid,
    cards,
    type: getHandType(cards),
  }
}

function getHandType(cards: string): HandType {
  const uniqueCountMap = new Map<string, number>()
  for (const card of cards) {
    const count = uniqueCountMap.get(card) ?? 0
    uniqueCountMap.set(card, count + 1)
  }

  if (uniqueCountMap.size === 1) {
    return 'FiveOfAKind'
  }
  if (uniqueCountMap.size === 5 && !uniqueCountMap.has('J')) {
    return 'HighCard'
  }
  if (uniqueCountMap.size === 5 && uniqueCountMap.has('J')) {
    return 'OnePair'
  }
  if (uniqueCountMap.size === 4 && !uniqueCountMap.has('J')) {
    return 'OnePair'
  }
  if (uniqueCountMap.size === 4 && uniqueCountMap.has('J')) {
    return 'ThreeOfAKind'
  }
  if (uniqueCountMap.size === 2 && !uniqueCountMap.has('J')) {
    const isFourOfAKind = Array.from(uniqueCountMap).some(([, count]) => count === 4)
    if (isFourOfAKind) {
      return 'FourOfAKind'
    }
    return 'FullHouse'
  }
  if (uniqueCountMap.size === 2 && uniqueCountMap.has('J')) {
    const isFourOfAKind = Array.from(uniqueCountMap).some(([, count]) => count === 4)
    if (isFourOfAKind) {
      return 'FiveOfAKind'
    }
    if (uniqueCountMap.get('J') === 2) {
      return 'FiveOfAKind'
    }
    if (uniqueCountMap.get('J') === 3) {
      return 'FiveOfAKind'
    }
    return 'FiveOfAKind'
  }

  if (uniqueCountMap.size === 3 && uniqueCountMap.has('J')) {
    const isThreeOfAKind = Array.from(uniqueCountMap).some(([, count]) => count === 3)
    if (isThreeOfAKind && uniqueCountMap.get('J') === 1) {
      return 'FourOfAKind'
    }
    if (uniqueCountMap.get('J') === 1) {
      return 'FullHouse'
    }
    return 'FourOfAKind'
  }

  const isThreeOfAKind = Array.from(uniqueCountMap).some(([, count]) => count === 3)
  if (isThreeOfAKind) {
    return 'ThreeOfAKind'
  }
  return 'TwoPair'
}

const handTypeValueMap: Record<HandType, number> = {
  HighCard: 0,
  OnePair: 1,
  TwoPair: 2,
  ThreeOfAKind: 3,
  FullHouse: 4,
  FourOfAKind: 5,
  FiveOfAKind: 6,
} as const

const cardValueMap: Record<string, number> = {
  J: 0,
  '2': 1,
  '3': 2,
  '4': 3,
  '5': 4,
  '6': 5,
  '7': 6,
  '8': 7,
  '9': 8,
  T: 9,
  Q: 10,
  K: 11,
  A: 12,
}

type Hand = {
  bid: number
  cards: string
  type: HandType
}

type HandType = 'FiveOfAKind' | 'FourOfAKind' | 'FullHouse' | 'ThreeOfAKind' | 'TwoPair' | 'OnePair' | 'HighCard'
