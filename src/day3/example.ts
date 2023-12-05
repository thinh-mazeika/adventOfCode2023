const partNumberLocations = new Set<string>()

type Position = {
  x: number
  y: number
}

function getLocationKey(pos: Position): string {
  return `${pos.x}, ${pos.y}`
}

function getPartNumber(pos: Position, grid: string[][]): number {
  const row = grid[pos.y]

  let start = pos.x

  while (start > 0 && row[start - 1].match(/[0-9]/)) {
    start -= 1
  }

  let end = start

  while (end < row.length - 1 && row[end + 1].match(/[0-9]/)) {
    end += 1
  }

  let partNumber = ''

  for (let i = start; i <= end; i++) {
    const locationKey = getLocationKey({ x: i, y: pos.y })
    partNumberLocations.add(locationKey)
    partNumber += row[i]
  }

  return +partNumber
}

function getPartNumbersAroundSymbol(pos: Position, grid: string[][]): number {
  let partNumbersAroundSymbol = 0

  const offsets = [
    // [x, y]
    [-1, -1], // top left
    [0, -1], // top
    [1, -1], // top right
    [-1, 0], // left
    [1, 0], // right
    [-1, 1], // bottom left
    [0, 1], // bottom
    [1, 1], // bottom right
  ]

  for (const [x, y] of offsets) {
    const nextPos: Position = {
      x: pos.x + x,
      y: pos.y + y,
    }

    const yOutOfBound = nextPos.y < 0 || nextPos.y > grid.length - 1

    if (yOutOfBound) {
      continue
    }

    const xOutOfBound = nextPos.x < 0 || nextPos.x > grid[nextPos.y].length - 1

    if (xOutOfBound) {
      continue
    }

    const char = grid[nextPos.y][nextPos.x]

    const locationKey = getLocationKey(nextPos)

    if (char.match(/[0-9]/) && !partNumberLocations.has(locationKey)) {
      partNumbersAroundSymbol += getPartNumber(nextPos, grid)
    }
  }
  return partNumbersAroundSymbol
}

function getTotalPartNumbers(grid: string[][]) {
  let totalPartNumbers = 0

  for (let y = 0; y < grid.length; y++) {
    const row = grid[y]
    for (let x = 0; x < row.length; x++) {
      const char = row[x]

      if (char.match(/[0-9]/) || char === '.') {
        continue
      }

      totalPartNumbers += getPartNumbersAroundSymbol({ x, y }, grid)
    }
  }

  return totalPartNumbers
}

export default getTotalPartNumbers
