export function solutionPart1(input: string): number {
  return input
    .split('\n')
    .map(getHand)
    .sort(compareHands)
    .map((hand, index) => hand.bid * (index + 1))
    .reduce((prev, curr) => prev + curr, 0)
}

function compareHands(a: Hand, b: Hand): number {
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
  const type = getHandType(cards)
  return {
    bid,
    cards,
    type,
  }
}

function getHandType(cards: string): HandType {
  const uniqueCardCount = new Map<string, number>()

  for (const card of cards) {
    const count = uniqueCardCount.get(card) ?? 0
    uniqueCardCount.set(card, count + 1)
  }

  if (uniqueCardCount.size === 1) {
    return 'FiveOfAKind'
  }
  if (uniqueCardCount.size === 5) {
    return 'HighCard'
  }
  if (uniqueCardCount.size === 4) {
    return 'OnePair'
  }
  if (uniqueCardCount.size === 2) {
    const isFourOfAKind = Array.from(uniqueCardCount).some(([, count]) => count === 4)
    if (isFourOfAKind) {
      return 'FourOfAKind'
    }
    return 'FullHouse'
  }
  const isThreeOfAKind = Array.from(uniqueCardCount).some(([, count]) => count === 3)
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
  '2': 0,
  '3': 1,
  '4': 2,
  '5': 3,
  '6': 4,
  '7': 5,
  '8': 6,
  '9': 7,
  T: 8,
  J: 9,
  Q: 10,
  K: 11,
  A: 12,
}

type HandType = 'FiveOfAKind' | 'FourOfAKind' | 'FullHouse' | 'ThreeOfAKind' | 'TwoPair' | 'OnePair' | 'HighCard'

type Hand = {
  bid: number
  cards: string
  type: HandType
}
